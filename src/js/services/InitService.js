/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

(function() {
  'use strict';
  angular.module("myApp")
  .factory("InitService", InitService);

  InitService.$inject = ['$document'];

  function InitService($document) {

    var fw7 = {
      app : new Framework7({
        animateNavBackIcon: true
      }), options : {
        dynamicNavbar: true,
        domCache: true
      }, views: [

      ]
    };

    var pub = {},
    eventListeners = {
      'ready' : []
    };

    pub.addEventListener = function (eventName, listener) {
      eventListeners[eventName].push(listener);
    };

    var onReady = function() {
      fw7.views.push(fw7.app.addView('.view-main', fw7.options));

      var i;
      for (i = 0; i < eventListeners.ready.length; i = i + 1) {
        eventListeners.ready[i]();
      }
    }

    // Init
    $document.ready(function () {

      if (document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
        // Cordova
        console.log("Using Cordova/PhoneGap setting");
        document.addEventListener("deviceready", onReady, false);
      } else {
        // Web browser
        console.log("Using web browser setting");
        onReady();
      }
      
    });

    return pub;
    
  };
})();