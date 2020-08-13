'use strict';

angular.module('codecompare', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/codecompare', {
    templateUrl: 'codecompare/codecompare.html',
    controller: 'codecompareCtrl'
  });
}])

.controller('codecompareCtrl', function($scope,$http,$location,$rootScope) {

 
  localStorage.getItem("tenant_id");
  console.log("tenanat_id");
});