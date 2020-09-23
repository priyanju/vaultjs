'use strict';

angular.module('new', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: 'new/new.html',
    controller: 'newCtrl'
  });
}])

.controller('newCtrl',function($scope, $http,$location,$rootScope,$window,$filter,$interval) {


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