'use strict';

angular.module('dashboardnew', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider,) {
    $routeProvider.when('/dashboardnew', {
      templateUrl: 'dashboardnew/dashboardnew.html',
      controller: 'DashboardnewCtrl'
    });
  }])

    .controller('DashboardnewCtrl', function ($scope, $interval, $http, $rootScope,$location,) {
  $scope.myLoader = true;
    $interval(function () {
      $scope.clock = Date.now();
   }, 1000);
        $http({
           method: 'GET',
           url: $rootScope.api_url + 'api/v1/new_board?tenant_id=' + $scope.tenant_id
              })
        .then(function (response) {
           $scope.myLoader = false;
          $scope.dashboardnew = response.data;
        })
  
        $scope.singlemachine = function(m_id){
         localStorage.setItem("machine_id",m_id);
         $location.path('/dashboard')
        }                    

    })
