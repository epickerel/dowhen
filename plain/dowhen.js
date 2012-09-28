/*jslint browser: true, white: true, maxerr: 50, indent: 2 */
/*
 * doWhen
 * Copyright 2011, Emmett Pickerel
 * Released under the MIT Licence.
 */
(function(factory){
  'use strict';
  var global = window;
  if (typeof global.define === 'function' && global.define.amd) {
    // Register as an anonymous AMD module:
    global.define(factory);
  } else {
    // Browser globals:
    factory(global.jQuery || global);
  }
}(function(attachTo){
  "use strict";
  var global = window,
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
      var context = iVars.context || global,
        data = iVars.data;
      if (iVars.test.call(context, data)) {
        clearInterval(iVars.iid);
        iVars.cb.call(context, data);
      }
    },
    start = function(iVars){
      iVars.iid = setInterval(function(){
        tick(iVars);
      }, iVars.interval);
    },
    doWhen = function(test, cb, cfg){
      var options = extend({
          test: test,
          cb: cb
        }, defaults);
      start(extend(options, cfg));
    };
    if (attachTo) {
        attachTo.doWhen = doWhen;
    }
    return doWhen;
}));
