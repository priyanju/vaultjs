'use strict';

angular.module('production', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/production', {
    templateUrl: 'production/production.html',
    controller: 'productionCtrl'
  });
}])

.controller('productionCtrl',function($scope, $http,$location,$rootScope,$window,$filter,$interval) {


})