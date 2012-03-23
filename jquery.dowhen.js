/*jslint browser: true, white: true, plusplus: true, maxerr: 50, indent: 4 */
/*
 * doWhen jQuery plugin
 * Copyright 2011, Emmett Pickerel
 * Released under the MIT Licence.
 */
(function(){
  "use strict";
  var defaults, tick, start, global = this, $ = global.jQuery;
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
}());
