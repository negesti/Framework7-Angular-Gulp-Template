

(function() {
  'use strict';

  angular.module('myApp')
  .controller("DetailPageController", DetailPageController);

  DetailPageController.$inject = ['$scope', '$http', 'InitService'];

  function DetailPageController ($scope, $http, InitService) {
    
    InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('DetailPageController: ok, DOM ready');

  });
    
  };

})();