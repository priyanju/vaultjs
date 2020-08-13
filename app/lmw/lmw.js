'use strict';

angular.module('lmw', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lmw', {
    templateUrl: 'lmw/lmw.html',
    controller: 'lmwCtrl'
  });
}])

.controller('lmwCtrl', function($scope, $http,$location,$window,$rootScope) {

        $scope.MachineID;
        $scope.start_date;
        $scope.mySel;

       // $scope.to_date;
        //$scope.tenant_id = localStorage.getItem("tenant_id");

        $scope.momentToday = moment(new Date()).format("YYYY-MM-DD");
        $scope.momentToday1 = moment().subtract(1, 'day').format("YYYY-MM-DD");


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

        
$scope.checkinmachineid = function () {


    
   $scope.operator_id = undefined;
    if ($scope.MachineID == null) {
      $scope.MachineID = undefined;

    }
  }

        

        //start to start


        $scope.imageshow = 1;
        

        $scope.viewData = function () {
    

            $scope.myLoader = true;
            $scope.imageshow = 2;
            $scope.viewDate = moment($scope.from_date).format("DD-MM-YY");
               

            for (var i in $rootScope.allmachines) {              

                if ($rootScope.allmachines[i].id == $scope.MachineID) {
                    $scope.machineName = $rootScope.allmachines[i].machine_name;
                }

            }
            for (var j in $rootScope.shiftstransfordrop) {
                
                if ($rootScope.shiftstransfordrop[j].id == $scope.ShiftID) {
                    $scope.shiftNo = $rootScope.shiftstransfordrop[j].shift_no;
                }
            }
      

            //chart1

   $http({
                method: 'GET',
                url: $rootScope.api_url + 'api/v1/weekly_machine_chart?machine_id=' + $scope.MachineID + '&days=' + $scope.mySel +'&tenant_id=' + $scope.tenant_id 
            }).then(function (response) {
                $scope.myLoader = false;
                $scope.hourutilization = response.data;
              //  console.log( $scope.hourutilization.start_date)
              
          
                $scope.runarryul = [];
                $scope.idlearryul = [];
                $scope.stoparryul = [];
                $scope.noarryul = [];
                $scope.alldays = [];
                $scope.machinename = [];
               

                for (var data in $scope.hourutilization) {
                    var run = $scope.hourutilization[data].run_time ;
                    $scope.runarryul.push(run);
                    var idle = $scope.hourutilization[data].idle;
                    $scope.idlearryul.push(idle);
                    var stop = $scope.hourutilization[data].stop;
                    $scope.stoparryul.push(stop);
                    var nodata = $scope.hourutilization[data].no_data;
                    $scope.noarryul.push(nodata);
                    var day = $scope.hourutilization[data].days;
                    $scope.alldays.push(day);
                    var name = $scope.hourutilization[data].machine_name;
                    $scope.machinename.push(name);
                    var start = $scope.hourutilization[data].start_date;

                    var end = $scope.hourutilization[data].end_date;

                }


              

                for (var i in $scope.runarryul) {
                    var num1 = $scope.runarryul[i];
                    var num2 = $scope.idlearryul[i];
                    var num3 = $scope.stoparryul[i];

                    if (num1 >= num2 && num1 >= num3) {
                        if($scope.noarryul[i] < 600){ 
                            $scope.runarryul[i] += $scope.noarryul[i];
                            $scope.noarryul[i]=0;
                            }
                       
                    } else if (num2 >= num1 && num2 >= num3) {
                        
                        if($scope.noarryul[i] < 600){ 
                            $scope.idlearryul[i] += $scope.noarryul[i];
                            $scope.noarryul[i]=0;
                            }
                    } else if (num3 >= num1 && num3 >= num1) {
                       
                        if($scope.noarryul[i] < 600){ 
                            $scope.stoparryul[i] += $scope.noarryul[i];
                            $scope.noarryul[i]=0;
                            }
                    }

                    if (num1 == 0 && num2 == 0 && num3 == 0) {
                        $scope.runarryul[i] = 0;
                        $scope.idlearryul[i] = 0;
                        $scope.stoparryul[i] = 0;
                    }
                }


                $scope.runarryul1 = [];
                $scope.idlearryul1 = [];
                $scope.stoparryul1 = [];
                $scope.noarryul1 = [];
                $scope.counter = 0
                for (var data in $scope.runarryul) {
                    var run = (secondsToMinutes($scope.runarryul[data])  * 100 / (60 * 24 * ($scope.alldays[$scope.counter])));
                  //  console.log(secondsToMinutes($scope.runarryul[data])  * 100 / (60 * 24 * ($scope.alldays[$scope.counter])));
                  //  console.log(i);
                    $scope.runarryul1.push(run);
                    var idle = (secondsToMinutes($scope.idlearryul[data])  * 100 / (60 * 24 * ($scope.alldays[$scope.counter])));
                    $scope.idlearryul1.push(idle);
                    var stop = (secondsToMinutes($scope.stoparryul[data])  * 100/ (60 * 24 * ($scope.alldays[$scope.counter])));
                    $scope.stoparryul1.push(stop);

                    var nodata = parseFloat(secondsToMinutes($scope.noarryul[data]) *100/ (60 * 24 * ($scope.alldays[$scope.counter])));
                      $scope.noarryul1.push(nodata);
                      $scope.counter = $scope.counter + 1;
                }


                Highcharts.chart('utilization', {
                    chart: {
                        type: 'bar',
                        height: '45%'
                    },
                    title: {
                        text: 'Machine Status With Utilization(%) Chart'
                    },
                    subtitle: {
                      text: 'From Date : '+start +', To Date : '+ end,
                        style: {
                            color: "#f58632",
                            fontSize: "16px"
                        }
                    },
                   xAxis: {
                        categories: $scope.machinename.reverse(),
                        title: {
                            text: 'Machine Name'
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Percentage(%)'
                        },
                        stackLabels: {
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                // color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                            },
                           formatter: function () {
                              
                                if(this.total >= 98 ){
                                    this.total = 100;                       
                                } 
                               
                                return Math.ceil(this.total) + '%';
                            }
                        }

                    },
                    legend: {
                        reversed: true
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                format: '{point.y:.0f} %', // your label's value plus the percentage sign
                                valueDecimals: 2 // show your label's value up to two decimal places
                            }
                        }

                    },
                    colors: ['#292b2c','#ec5550', '#e8a249', '#2cbe63'],
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            name: 'Nodata',
                            data: $scope.noarryul1.reverse()
                        },
                        {
                        name: 'Stop',
                        data: $scope.stoparryul1.reverse()
                    }, {
                        name: 'idle',
                        data: $scope.idlearryul1.reverse()
                    }, {
                        name: 'Run',
                        data: $scope.runarryul1.reverse()
                    }]
                })
            })
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
