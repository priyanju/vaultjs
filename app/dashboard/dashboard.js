'use strict';

angular.module('dashboard', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    });
  }])
  .filter('splithtml', function() {
    return function(input, splitChar, splitIndex) {
       // do some bounds checking here to ensure it has that index
     
        var n=input.replace('-','/')
        var pieces = n.split(splitChar);
        //console.log(pieces)
        var s=n.split(splitChar)[1]
       // console.log(s)
        var e=pieces[pieces.length-1]
        //console.log(e)
     
       return s+"-"+e;
  
        //return input;
    }
  })
    .controller('DashboardCtrl', function ($scope, $interval, $http, $rootScope,$location) {

      var tick = function () {
      $scope.clock = Date.now();
    }
    $scope.machine_id = localStorage.getItem("machine_id");
    tick();
    $interval(tick, 1000);
  
    $http({
      method: 'GET',
      url: $rootScope.api_url + 'api/v1/latest_dashboard?tenant_id=' + $scope.tenant_id
    })
      .then(function (response) {
        $scope.machine = response.data;
       // console.log($scope.machine)
        $scope.myLoader = true;
        $http({
          method: 'GET',
          url: $rootScope.api_url + 'api/v1/single_machine_live_status?machine_id=' + $scope.machine_id
        })
          .then(function (response) {
            $scope.myLoader = false;
            $scope.datas = response.data;
           // console.log($scope.datas)
            $scope.repeatchart = [];
            if($scope.datas.spindle_load <= 0){
              $scope.pop = "false";
              console.log($scope.pop);
            }else{
              $scope.pop = "true";
              console.log($scope.pop);
            }
         for (let i = 0; i < Object.values($scope.datas.axis_load).length; i++) {
          $scope.repeatchart.push($scope.vall($scope.axis(Object.values($scope.datas.axis_load)[i])))
          }
           $scope.feedrate = $scope.datas.feed_rate;
           $scope.spindlespeed = $scope.datas.spindle_speed; 
           $scope.loadcharts();
          })
          
          //new code for initially load first machine data  -- PRIYA

          let getallMachineData = $scope.machine.data

          let keys = Object.keys(getallMachineData);
          console.log(keys);
          let firstObject = getallMachineData[keys[0]][0];
          console.log(firstObject)
          $scope.activeclick(firstObject['machine_id'])
         
          //   END  

      })

      $scope.imageshow=1;
      $scope.axis = function(ax){
        var data = ax <= 5 ? (ax == 0 ? 0 : 1) : Math.ceil(ax/5);
        return data
      }
     
    $scope.activeclick = function (data) {
      $scope.myLoader = true;
      $scope.imageshow=2;
      $scope.m_id = data;
      $http({
        method: 'GET',
        url: $rootScope.api_url + 'api/v1/single_machine_live_status?machine_id=' + $scope.m_id
      })
        .then(function (response) {
          $scope.myLoader = false;
          $scope.datas = response.data;
          $scope.feedrate = $scope.datas.feed_rate;
          $scope.spindlespeed = $scope.datas.spindle_speed;
          if($scope.datas.spindle_load <= 0){
            $scope.pop = "false";
            console.log($scope.pop);
          }else{
            $scope.pop = "true";
            console.log($scope.pop);
          }
          $scope.repeatchart = [];
        //   var axis_load = $scope.datas.axis_load.x_axis <= 5 ? ($scope.datas.axis_load.x_axis == 0 ? 0 : 1) : Math.ceil($scope.datas.axis_load.x_axis/5);
        //   $scope.repeatchart.push(axis_load)
        //  var y_axis_load = $scope.datas.axis_load.y_axis <= 5 ? ($scope.datas.axis_load.y_axis == 0 ? 0 : 1) : Math.ceil($scope.datas.axis_load.y_axis/5);
        //  $scope.repeatchart.push(y_axis_load)
        for (let i = 0; i < Object.values($scope.datas.axis_load).length; i++) {
         $scope.repeatchart.push($scope.vall($scope.axis(Object.values($scope.datas.axis_load)[i])))
         }
          //  $scope.x_axis_range = $scope.datas.x_axis <= 5 ? ($scope.datas.x_axis == 0 ? 0 : 1) : Math.ceil($scope.datas.x_axis/5);
         //  $scope.y_axis_range = $scope.datas.y_axis <= 5 ? ($scope.datas.y_axis == 0 ? 0 : 1) : Math.ceil($scope.datas.y_axis/5);
        //  $scope.z_axis_range = $scope.datas.z_axis <= 5 ? ($scope.datas.z_axis == 0 ? 0 : 1) : Math.ceil($scope.datas.z_axis/5);
          $scope.loadcharts();
        })
        $http({
          method: 'GET',
          url: $rootScope.api_url + 'api/v1/latest_dashboard?tenant_id=' + $scope.tenant_id
        })
          .then(function (response) {
            $scope.machine = response.data;
  
          })


    }
 
    $scope.machine_page_redirect = function (id) {
//  alert(id)
      localStorage.setItem("machine_id", id);
      $location.path('/machinenew')
    }
 $scope.vall = function(end_value){
  var ans = [];
  for (let i = 1; i <= end_value; i++) {
      ans.push(i*5);
  }
  return ans;
 }
   
    $scope.loadcharts = function () {
    $('#container').highcharts({
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        style: {
          color: '#FFFFFF',
          font: 'bold 14px "Trebuchet MS", Verdana, sans-serif'
        },
        text: 'Spindle'+ '\xa0'+'Speed',
        y:30
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        background: null
      },

      yAxis: {
        labels: {
          enabled: true,
          x: 35, y: -10
        },
        tickPositions: [],
        minorTickLength: 0,
        min: 0,
        max: 10000,
        plotBands: [{
          from: 0,
          to: 5000,
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#40aa3e'], //green
              [1, '#59db57'] //red
            ]
          },
          thickness: '40%'
        }, {
          from: 5000,
          to: 10000,
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#fd6363'], //green
              [1, '#c41a1a'] //red
            ]
          },
          thickness: '40%'
        }]
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Spindle Speed',
        data: [$scope.spindlespeed],
        color: {
          linearGradient: [0, 0, 300, 0],
          stops: [
            [0.4, '#FF0000'],
            [0.1, '#55BF3B']
          ]
        },
        dataLabels: {
          format: '<span style="font-size:14px;color:grey;">{y} RPM</span></div>',
          y: 10,
          borderWidth: 0
        },
        tooltip: {
          valueSuffix: ' RPM'
        }
      }]
    });

    
    $('#container1').highcharts({
      
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,

      },
      title: {
        style: {
          color: '#FFFFFF',
          font: 'bold 14px "Trebuchet MS", Verdana, sans-serif'
        },
        text: 'Feed',
        y:30
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        background: null
      },

      yAxis: {
        labels: {
          enabled: true,
          x: 35, y: -50
        },
        tickPositions: [],
        minorTickLength: 0,
        min: 0,
        max: 5000,
        plotBands: [{
          from: 0,
          to: 2500,
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#40aa3e'], //green
              [1, '#59db57'] //red
            ]
          },
          thickness: '40%'
        }, {
          from: 2500,
          to: 5000,
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#fd6363'], //green
              [1, '#c41a1a'] //red
            ]
          },
          thickness: '40%'
        }]
      },

      exporting: {
        enabled: false
      },
      series: [{
        name: 'Feed Rate',
        data: [$scope.feedrate], 
        color: {
          linearGradient: [0, 0, 300, 0],
          stops: [
            [0.4, '#FF0000'],
            [0.1, '#55BF3B']
          ]
        },
        dataLabels: {
          format: '<span style="font-size:15px;color:grey;">{y} m/min </span></div>',
          y: 10,
          borderWidth: 0
        },
        tooltip: {
          valueSuffix: ' m/min'
        }
      }]
    })
  $('#static_chart').highcharts({
    chart: {
        type: 'column'
    },
    title: false,
    xAxis: false,
    yAxis: false,
    legend: {
        enabled: false
    },
    xAxis: [{ 
      gridLineWidth: 0,
      title: false,
      labels: false,
      lineColor: 'transparent',
      tickColor: 'transparent',
    }],
    yAxis: [{ 
      gridLineWidth: 0,
      title: false,
      labels: false
    }],
    colors: ['#41ad3f'],
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: false
        }
    },

    tooltip: false,

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": false,
            "data": [
                {
                    "name": "Chrome",
                    "y": 60,
                    "drilldown": "Chrome"
                },
                {
                    "name": "Firefox",
                    "y": 45,
                    "drilldown": "Firefox"
                },
                {
                    "name": "Chrome",
                    "y": 60,
                    "drilldown": "Chrome"
                },
                {
                    "name": "Firefox",
                    "y": 45,
                    "drilldown": "Firefox"
                },
                {
                    "name": "Internet Explorer",
                    "y": 39,
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "Firefox",
                    "y": 45,
                    "drilldown": "Firefox"
                },
                {
                    "name": "Internet Explorer",
                    "y": 39,
                    "drilldown": "Internet Explorer"
                }
            ]
        }
    ]
    })
  }

  });


//   dashboard.filter('splithtml', function() {
//   return function(input, splitChar, splitIndex) {
   
   
//       var n=input.replace('-','/')
//       var pieces = n.split(splitChar);
//       var s=n.split(splitChar)[1]
//       var e=pieces[pieces.length-1]
   
//      return s+"-"+e;
//   }
// })
