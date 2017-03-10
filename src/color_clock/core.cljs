(ns color-clock.core
  (:require [reagent.core :as r]
            [goog.string :as str]))

(enable-console-print!)

(defn get-current-time
  []
  (let [time (js/Date.)
        hours (str/padNumber (.getHours time) 2)
        minutes (str/padNumber (.getMinutes time) 2)
        seconds (str/padNumber (.getSeconds time) 2)]
     {:hours hours :minutes minutes :seconds seconds}))

(defn interpolate
  [number max-value mapped-max-value]
  (js/Math.floor (* (/ number max-value) mapped-max-value)))

(defn time-to-rgb
  [{:keys [hours minutes seconds]}]
  (str "rgb(" (interpolate hours 24 255) "," (interpolate minutes 60 255) "," (interpolate seconds 60 255) ")"))

(defn clock-page []
  (let [current-time (r/atom (get-current-time))]
    (add-watch current-time :seconds println)
    (fn []
      (js/setTimeout #(reset! current-time (get-current-time)) 1000)
      [:div {:class "holder" 
              :style {"backgroundColor" (time-to-rgb @current-time)}} 
        [:h1 (interpose ":" @current-time)]])))

;; -------------------------
;; Initialize app
(r/render [clock-page] (.getElementById js/document "app"))

