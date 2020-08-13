'use strict';

angular.module('compare', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/compare', {
            templateUrl: 'compare/compare.html',
            controller: 'CompareCtrl'
        });
    }])

    .controller('CompareCtrl', function ($scope, $http, $location, $window, $rootScope) {

    })