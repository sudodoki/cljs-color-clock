// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('color_clock.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.string');
cljs.core.enable_console_print_BANG_();
color_clock.core.get_current_time = (function color_clock$core$get_current_time(){
var time = (new Date());
var hours = (function (){var G__13343 = time.getHours();
var G__13344 = (2);
return goog.string.padNumber(G__13343,G__13344);
})();
var minutes = (function (){var G__13345 = time.getMinutes();
var G__13346 = (2);
return goog.string.padNumber(G__13345,G__13346);
})();
var seconds = (function (){var G__13347 = time.getSeconds();
var G__13348 = (2);
return goog.string.padNumber(G__13347,G__13348);
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds], null);
});
color_clock.core.interpolate = (function color_clock$core$interpolate(number,max_value,mapped_max_value){
var G__13350 = ((number / max_value) * mapped_max_value);
return Math.floor(G__13350);
});
color_clock.core.time_to_rgb = (function color_clock$core$time_to_rgb(p__13351){
var map__13354 = p__13351;
var map__13354__$1 = ((((!((map__13354 == null)))?((((map__13354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13354):map__13354);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13354__$1,cljs.core.cst$kw$hours);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13354__$1,cljs.core.cst$kw$minutes);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13354__$1,cljs.core.cst$kw$seconds);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_clock.core.interpolate(hours,(24),(255))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_clock.core.interpolate(minutes,(60),(255))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_clock.core.interpolate(seconds,(60),(255))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
color_clock.core.clock_page = (function color_clock$core$clock_page(){
var current_time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(color_clock.core.get_current_time());
cljs.core.add_watch(current_time,cljs.core.cst$kw$seconds,cljs.core.println);

return ((function (current_time){
return (function (){
var G__13360_13364 = ((function (current_time){
return (function (){
var G__13362 = current_time;
var G__13363 = color_clock.core.get_current_time();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13362,G__13363) : cljs.core.reset_BANG_.call(null,G__13362,G__13363));
});})(current_time))
;
var G__13361_13365 = (1000);
setTimeout(G__13360_13364,G__13361_13365);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"holder",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, ["backgroundColor",color_clock.core.time_to_rgb((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_time) : cljs.core.deref.call(null,current_time)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(":",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_time) : cljs.core.deref.call(null,current_time)))], null)], null);
});
;})(current_time))
});
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_clock.core.clock_page], null),document.getElementById("app"));
