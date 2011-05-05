/*
 * doWhen jQuery plugin
 * Copyright 2011, Emmett Pickerel
 * Released under the MIT Licence.
 */
!function($){
var defaults, tick, start;
defaults = {
  interval: 100
};
tick = function(iVars){
  if (iVars.test()) {
    clearInterval(iVars.iid);
    iVars.cb.call(iVars.context || window, iVars.data);
  }
};
start = function(iVars){
  iVars.iid = setInterval(function(){
    tick(iVars);
  }, iVars.interval);
};
$.doWhen = function(test, cb, cfg){
  start($.extend({
    test: test,
    cb: cb
  }, defaults, cfg));
};
}(window.jQuery);
