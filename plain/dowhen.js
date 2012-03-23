/*jslint browser: true, white: true, plusplus: true, maxerr: 50, indent: 4 */
/*
 * doWhen
 * Copyright 2011, Emmett Pickerel
 * Released under the MIT Licence.
 */
(function(){
  "use strict";
  var global = this,
    defaults = {
      interval: 100
    },
    extend = function(a, b){
      var k;
      for (k in b) {
        if (b.hasOwnProperty(k)) {
          a[k] = b[k];
        }
      }
      return a;
    },
    tick = function(iVars){
      if (iVars.test()) {
        clearInterval(iVars.iid);
        iVars.cb.call(iVars.context || global, iVars.data);
      }
    },
    start = function(iVars){
      iVars.iid = setInterval(function(){
        tick(iVars);
      }, iVars.interval);
    };
  global.Event.doWhen = function(test, cb, cfg){
    var options = extend({
        test: test,
        cb: cb
      }, defaults);
    start(extend(options, cfg));
  };
}());
