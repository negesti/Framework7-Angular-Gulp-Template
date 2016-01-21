/*jslint browser: true*/


(function() {
  'use strict';
  angular.module('myApp')
  .controller("IndexPageController", IndexPageController);

  IndexPageController.$inject = ['$scope', 'InitService'];


  function IndexPageController($scope, InitService) {
    $scope.name = "Index";
    
    InitService.addEventListener('ready', function () {
      // DOM ready
      console.log('IndexPageController: ok, DOM ready');
      
      // You can access angular like this:
      // MyApp.angular
      
      // And you can access Framework7 like this:
      // MyApp.fw7.app
    });

  }

})();