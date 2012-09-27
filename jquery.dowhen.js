/*jslint browser: true, white: true, plusplus: true, maxerr: 50, indent: 2 */
/*
 * doWhen jQuery plugin
 * Copyright 2011, Emmett Pickerel
 * Released under the MIT Licence.
 */

(function(factory){
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['jquery'], factory);
  } else {
    // Browser globals:
    factory(window.jQuery);
  }
}(function($){
  "use strict";
  var defaults, tick, start,
    global = Function('return this')();
  defaults = {
    interval: 100
  };
  tick = function(iVars){
    if (iVars.test()) {
      clearInterval(iVars.iid);
      iVars.cb.call(iVars.context || global, iVars.data);
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
}));