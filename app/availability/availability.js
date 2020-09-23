'use strict';

angular.module('availability', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/availability', {
    templateUrl: 'availability/availability.html',
    controller: 'availabilityCtrl'
  });
}])

.controller('availabilityCtrl',function($scope, $http,$location,$rootScope,$window,$filter,$interval) {


  $scope.machine_page_redirect = function () {
    //  alert(id)
          // localStorage.setItem("machine_id", id);
          $location.path('/screen')
        }

 $scope.machines_page_redirect = function () {
          //  alert(id)
                // localStorage.setItem("machine_id", id);
                $location.path('/production')
              }
})