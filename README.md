## jQuery.doWhen( testFn, callbackFn, config )

doWhen is a jQuery plugin to solve all your wait-until-ready problems, wash your dishes for you, and blow dry your cat when it falls in the tub. All that for just 262 bytes, minified!

Have you ever called a function before all the things it depends on are ready? The dependencies might be an html node, a plugin, a dynamically generated script finished loading, an image finished loading, a server state checked via ajax... the possibilities are endless. If you've been coding Javascript as long as I have, you've probably created countless bespoke solutions to fit each case.

No more. Let's say you need to do something to an element once it is created:

    jQuery.doWhen(function(){
      return !!document.getElementById('myelement');
    }, function(){
      document.getElementById('myelement').innerHTML = "I'm loaded"!
    });

The first function is a test. When it returns a truthy value, the second function is run. It's as simple as that.

If you need the second function to run in a specific context (where the "this" keyword points to), use the config parameter:

    jQuery.doWhen(..., ..., {
      context: myObject
    }

You can also pass it data:

    jQuery.doWhen(..., ..., {
      data: {
        blix: 'blarg'
      }
    });

And, lastly, if you want to use a different interval than the default of 100ms between tests (which you'd definitely do for any test involving ajax):

    jQuery.doWhen(..., ..., {
      interval: 60 * 1000 //once every minute
    }

---------
Note that it would be *very* easy to adapt this to remove the jQuery dependency. The only thing it's needed for is a shallow "extend" and a namespace to put the object.
