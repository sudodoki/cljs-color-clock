// Compiled by ClojureScript 1.9.456 {}
goog.provide('color_clock.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
cljs.core.enable_console_print_BANG_.call(null);
color_clock.core.get_current_time = (function color_clock$core$get_current_time(){
var time = (new Date());
var hours = goog.string.padNumber(time.getHours(),(2));
var minutes = goog.string.padNumber(time.getMinutes(),(2));
var seconds = goog.string.padNumber(time.getSeconds(),(2));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds], null);
});
color_clock.core.interpolate = (function color_clock$core$interpolate(number,max_value,mapped_max_value){
return Math.floor(((number / max_value) * mapped_max_value));
});
color_clock.core.time_to_rgb = (function color_clock$core$time_to_rgb(p__7862){
var map__7865 = p__7862;
var map__7865__$1 = ((((!((map__7865 == null)))?((((map__7865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7865):map__7865);
var hours = cljs.core.get.call(null,map__7865__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__7865__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__7865__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("rgb("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_clock.core.interpolate.call(null,hours,(24),(255))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_clock.core.interpolate.call(null,minutes,(60),(255))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_clock.core.interpolate.call(null,seconds,(60),(255))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
color_clock.core.clock_page = (function color_clock$core$clock_page(){
var current_time = reagent.core.atom.call(null,color_clock.core.get_current_time.call(null));
cljs.core.add_watch.call(null,current_time,new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.println);

return ((function (current_time){
return (function (){
setTimeout(((function (current_time){
return (function (){
return cljs.core.reset_BANG_.call(null,current_time,color_clock.core.get_current_time.call(null));
});})(current_time))
,(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"holder",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["backgroundColor",color_clock.core.time_to_rgb.call(null,cljs.core.deref.call(null,current_time))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.interpose.call(null,":",cljs.core.deref.call(null,current_time))], null)], null);
});
;})(current_time))
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_clock.core.clock_page], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map