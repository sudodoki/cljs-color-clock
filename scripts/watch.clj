(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'color-clock.core
   :output-to "out/color_clock.js"
   :output-dir "out"})
