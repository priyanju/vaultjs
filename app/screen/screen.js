'use strict';

angular.module('screen', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/screen', {
    templateUrl: 'screen/screen.html',
    controller: 'screenCtrl'
  });
}])

.controller('screenCtrl',function($scope, $http,$location,$rootScope,$window,$filter,$interval) {


})