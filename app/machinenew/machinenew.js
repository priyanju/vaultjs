'use strict';

angular.module('machinenew', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/machinenew', {
      templateUrl: 'machinenew/machinenew.html',
      controller: 'MachinenewCtrl'
    });
  }])

  .controller('MachinenewCtrl', function ($scope, $http, $location, $rootScope, $timeout, $window, $filter) {

      $scope.tenant_id = localStorage.getItem("tenant_id");
      $scope.MachineID = parseInt(localStorage.getItem("machine_id"));
      //$scope.machine_id = localStorage.getItem("machine_id");



    /*var SecondsTohhmmss = function(totalSeconds) {
      var hours   = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
      var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
      seconds = Math.round(seconds * 100) / 100

        var result = (hours < 10 ? "0" + hours : hours);
            result += ":" + (minutes < 10 ? "0" + minutes : minutes);
            result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
        return result;
    }*/

    $scope.Timevalues = "";
    $scope.timeMethod = function (time) {
      $scope.Timevalues = time;
      if (!angular.isUndefined(time)) {
        var hms = $scope.Timevalues;
        var a = hms.split(':');
        var minutes = (+a[0]) * 60 + (+a[1]);
        return minutes;
      }
    }


      $scope.myLoader = true;
      $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/machines?tenant_id=' + $scope.tenant_id
      })
      .then(function (response) {
        $rootScope.allmachines = response.data;
        $scope.Current_Shift();      
        
      })

      $scope.checkingmachineid = function (machine) {
        $scope.myLoader = true;
        $scope.MachineID = machine;
        $scope.Current_Shift();
      }

      $scope.Current_Shift=function(){
         $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/machine_current_shit?tenant_id=' + $scope.tenant_id
          })
            .then(function (response) {
              $scope.Current_Hours();
              if(response.data != null){
                  $scope.shiftsList = response.data.shift;  
                  $scope.date=response.data.date;       
              }            
          })
      }

      $scope.Current_Hours=function(){
          $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/current_shift_hour_wise?tenant_id='+$scope.tenant_id+'&machine_id='+$scope.MachineID
          })
            .then(function (response) { 
              $scope.myLoader = false;           
              $scope.Hour_times = response.data;
              $scope.run = $scope.timeMethod(response.data.tot_run);
              $scope.idle = $scope.timeMethod(response.data.tot_idle);
              $scope.stop = $scope.timeMethod(response.data.tot_stop);
              $scope.nodata = $scope.timeMethod(response.data.no_data);
              $scope.Piechart($scope.run,$scope.idle,$scope.stop,$scope.nodata)            
          })
      }
    

      $scope.Piechart = function (run,idle,stop,nodata) {
          var brandPrimary = '#f7941e';
          var machineRunning = '#2cbe63';

          var data = {
            labels: [
              "Running",
              "Idle",
              "Stopped",
              "Remaining"
            ],
            datasets: [
              {
                data: [run,
                  idle,
                  stop,
                  nodata],
                backgroundColor: [
                  "#6bd191",
                  "#eaab5b",
                  "#ed6661",
                  "#757575"
                ],
                hoverBackgroundColor: [
                  "#6bd191",
                  "#eaab5b",
                  "#ed6661",
                  "#757575"
                ]
              }]
          };
          $rootScope.chartdestory = 2;
          var PIECHARTEXMPLE = $('#pieChartExample');
          $rootScope.pieChartExample = new Chart(PIECHARTEXMPLE, {
            type: 'doughnut',
            data: data,
            options: {
              responsive: true,
              tooltip: {
              trigger: 'none'
          
          },
             tooltips:{
                   enabled: false
          }            
     }   
          })
    }   


  });

