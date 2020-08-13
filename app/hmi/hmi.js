'use strict';

angular.module('hmi', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hmi', {
    templateUrl: 'hmi/hmi.html',
    controller: 'hmiCtrl'
  });
}])

.controller('hmiCtrl', function($scope,$location,$timeout,$http,$rootScope) {


    $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/machines?tenant_id=' + $scope.tenant_id
    })
        .then(function (response) {
            $rootScope.allmachines = response.data;
             $scope.MachineID = response.data[0].id;
        })


    $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/shifts?tenant_id=' + $scope.tenant_id
    })
        .then(function (response) {
            $scope.shiftdetailfordrop = response.data;

            $http({
                method: 'GET',
                url: $rootScope.api_url + 'api/v1/shifttransactions?shift_id=' + $scope.shiftdetailfordrop.id
            })
                .then(function (response) {
                    $rootScope.shiftstransfordrop = response.data;

                })
        })

    $scope.myLoader=true;
    $scope.view_report=false;
    $scope.view_chart=false;
  
   
  $scope.tenant_id=localStorage.getItem("tenant_id") ;

  $scope.momentToday= moment(new Date()).format("DD-MM-YYYY");
  $scope.momentToday2=moment().subtract(60, 'day').format("DD-MM-YYYY");

  $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/machines?tenant_id=' + $scope.tenant_id
  }).then(function (response) {
                $scope.allmachines = response.data;
  })


  $http({ 
          method: 'GET',
          url: $rootScope.api_url + 'api/v1/shifts?tenant_id=' + $scope.tenant_id
  }).then(function (response) {
    
    $scope.shiftdetailfordrop = response.data;
    
    $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/shifttransactions?shift_id=' + $scope.shiftdetailfordrop.id
    }).then(function (response) {
            $rootScope.shiftstransfordrop = response.data;
            $scope.myLoader=false;

    },function(error){
      $scope.myLoader=false;
    })
   },function(error){
      $scope.myLoader=false;
    })

  $scope.checkingmachineid = function () {
    if ($scope.MachineID == null) {
      $scope.MachineID = undefined;
    }
  }
  
  $scope.checkingshiftid = function () {
    $scope.operator_id = undefined;
    if ($scope.ShiftID == null) {
      $scope.ShiftID = undefined;
    }
  }
  
  $scope.viewReport=function(){
    
    $scope.myLoader=true;
    $scope.view_chart=false;
    $scope.view_report=true;
  
    $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/hmi_reason?tenant_id='+$scope.tenant_id+'&start_date='+$scope.from_date+'&end_date='+$scope.from_date+'&machine_id='+$scope.MachineID+'&shift_id='+$scope.ShiftID
    }).then(function (response) {
        $scope.hmiData=response.data;
        $scope.myLoader=false;     
    },function(error){
        $scope.myLoader=false;
    })
  }

  $scope.viewChart=function(){
    $scope.myLoader=true;
    $scope.view_report=false;
    $scope.view_chart=true;
    
    $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/hmi_reason_chart?tenant_id='+$scope.tenant_id+'&start_date='+$scope.from_date+'&end_date='+$scope.from_date+'&machine_id='+$scope.MachineID+'&shift_id='+$scope.ShiftID
    }).then(function (response) {
          // console.log(response.data)
           $scope.hmiChartData=response.data;
           $scope.c_time = [];

           for (var i in $scope.hmiChartData.time) {
             var cycle1 = secondsToMinutes($scope.hmiChartData.time[i]);
             var cycle = parseFloat(cycle1);
             $scope.c_time.push(cycle);
           }
           Highcharts.chart('partcycle', {
                        chart: {
                            renderTo: 'container',
                            type: 'column',
                            options3d: {
                                enabled: true,
                                alpha: 15,
                                beta: 15,
                                depth: 50,
                                viewDistance: 25
                            }
                        },
                        title: {
                            text: 'HMI Chart'
                        },
                        subtitle: {
                            text: 'Machine ID : '+$scope.hmiChartData.machine_name +', Shift : '+ $scope.hmiChartData.shift+', Date : '+$scope.hmiChartData.date,
                            style: {
                                color: "#f58632",
                                fontSize: "16px"
                            }
                        },

                        xAxis: {

                            categories:  $scope.hmiChartData.reason,
                            crosshair: true,
                            title: {
                                text: 'Reason'
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Time(min)'
                            },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        },
                        tooltip: {
                   
                                formatter: function() {
                                    return 'Reason : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';
                
                            }
                        },
         
                        credits: {
                            enabled: false
                        },
                        colors: ['#f58632'],
                        series: [{
                            name: 'Idle Reason',
                            data: $scope.c_time,

                            dataLabels: {
                                enabled: true,
                                // rotation: -90,
                                color: '#292b2c',
                                align: 'center',
                                valueDecimals: 2,
                                format: '{point.y:.2f}', // one decimal
                                y: 0, // 10 pixels down from the top
                                style: {
                                    fontSize: '10px',
                                    fontWeight: 'normal',
                                    // fontFamily: 'Verdana, sans-serif'
                                }
                            },
                        }]
                    })
          // console.log($scope.hmiChartData)
           $scope.myLoader=false;
    },function(error){
        $scope.myLoader=false;
    })
  }
  
  $scope.totalAmount=function(){
  if($scope.hmiData!=undefined){
      // assuming num will always be positive
    function zeroPad(num) {                    
      var str = String(num);
      if (str.length < 2) {
        return '0' + str;
      }

      return str;
    }
    function totalTimeString(timeStrings) {
      var totals = timeStrings.reduce(function (a, timeString) {
        var parts = timeString.split(':');
        var temp;
        if (parts.length > 0) {
          temp = Number(parts.pop()) + a.seconds;
          a.seconds = temp % 60;
          if (parts.length > 0) {
            temp = (Number(parts.pop()) + a.minutes) + ((temp - a.seconds) / 60);
            a.minutes = temp % 60;
            a.hours = a.hours + ((temp - a.minutes) / 60);
            if (parts.length > 0) {
              a.hours += Number(parts.pop());
            }
          }
        }

        return a;
      }, {
        hours: 0,
        minutes: 0,
        seconds: 0
      });

      // returned string will be HH(H+):mm:ss
      return [
        zeroPad(totals.hours),
        zeroPad(totals.minutes),
        zeroPad(totals.seconds)
      ].join(':');
    }
    
    var data =[];
   
    for(var i=0;i<$scope.hmiData.length;i++){
      data.push($scope.hmiData[i].idle_time)
    }
   // console.log(data)
    var result1 = totalTimeString(data);

    return result1;
      
     }
  }  
  
  
});


function secondsToMinutes(time) {

    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);

    if (sec.toString().length == 1) {
        // alert(sec);
        sec = '0' + sec;
    }
    return min + '.' + sec;
}