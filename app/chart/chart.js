'use strict';

angular.module('chart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart', {
    templateUrl: 'chart/chart.html',
    controller: 'chartCtrl'
  });
}])

.controller('chartCtrl', function($scope,$timeout, $http,$location,$window,$rootScope) {

        $scope.MachineID;
        $scope.ShiftID;
        $scope.from_date;
        $scope.tenant_id = localStorage.getItem("tenant_id");
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

             

  $http({
    method: 'GET',
    url: $rootScope.api_url + 'api/v1/current_shift?tenant_id=' + $scope.tenant_id
})
    .then(function (response) {
        $scope.current_view_details = response.data;
        $scope.MachineID=$scope.current_view_details.machine;
        console.log( $scope.current_view_details);
        $scope.ShiftID=$scope.current_view_details.shift_id;
        $scope.from_date=$scope.current_view_details.date;
       // $scope.tenant_id=$scope.current_view_details.tenant;
        $scope.viewData();
    })
        
$scope.checkingshiftid = function () {
    
   $scope.operator_id = undefined;
    if ($scope.ShiftID == null) {
      $scope.ShiftID = undefined;

    }
  }

        //start to start
        $scope.imageshow = 1;
//--------------------chart 1  --------------------------------------------------


$scope.allcycletimechart = function () {

for(var j in $scope.allcycletime){
                                     
    // alert(j);
     $scope.parts = [];
     $scope.c_time = [];
     $scope.pro_number = [];

     for (var i in $scope.allcycletime[j]) {
         var part = i * 1 + 1;
         $scope.parts.push(part);
         $scope.shiftNo = $scope.allcycletime[j][i].shift_no;
         $scope.average = (secondsToMinutes($scope.allcycletime[j][i].average));
         $scope.time = $scope.allcycletime[j][i].time;
         var cycle1 = secondsToMinutes($scope.allcycletime[j][i].cycle_time);
         var cycle = parseFloat(cycle1);
         var pro_number = $scope.allcycletime[j][i].program_number;
         $scope.c_time.push(cycle);
         $scope.pro_number.push(pro_number); 
     }

     var arr = $scope.pro_number
     var uniqs = arr.reduce((acc, val) => {
     //console.log(acc, val);
         acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
         return acc;
     }, {});
     //console.log(uniqs)
     $scope.diffparts = uniqs;
    console.log($scope.diffparts);
     var name="partcycle" + j;
     
     Highcharts.chart(name, {
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
             text: 'Cycle Time Chart(Mins)'
         },
         subtitle: {
              text: 'Machine ID : ' + $scope.machineName+ ', Date : ' + $scope.viewDate + ', Shift : ' + $scope.shiftNo +',Time : ' +$scope.time + '  <br>' + 'PartsCount(Program No) : ' + (Object.values($scope.diffparts)) + '(' + Object.keys($scope.diffparts) + ')' +',Average : ' +$scope.average+ '(Minutes)',
             style: {
                 color: "#f58632",
                 fontSize: "16px"
             }
         },
         xAxis: {

             categories: ($scope.parts),
             crosshair: true,
             title: {
                 text: 'Parts Count'
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
           
             formatter: function () {
                 return 'Parts count : <b>' + this.x + '</b>, Time <b>' + this.y + ' min </b>';

             }
         },
         plotOptions: {
             column: {
                 pointPadding: 0.2,
                 borderWidth: 0
             },
             series: {
                 // pointWidth: 20
             }
         },
         credits: {
             enabled: false
         },
         colors: ['#f58632'],
         series: [{
             name: 'Parts Count',
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
                     fontWeight: 'normal'
                 }
             },
         }]
     })
 }
}


//-------------------------------------


// -----------------------chart 2 -------------------------

 
$scope.hourwisemachinechart = function () {


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
 $scope.runarry = [];
 $scope.idlearry = [];
 $scope.stoparry = [];
 $scope.noarry = [];
 $scope.countstart = [];
     

 for (var data in $scope.hourwisemachine.run_time) {
       var count = data * 1 + 1;
     $scope.countstart.push(count);

     var run = $scope.hourwisemachine.run_time[data] / 1;
     //  var ss =parseFloat(secondsToMinutes(ss1));
     $scope.runarry.push(run);
     var idle = $scope.hourwisemachine.idle_time[data] / 1;
     // var ss = parseFloat(secondsToMinutes(ss1));
     $scope.idlearry.push(idle);
     var stop =$scope.hourwisemachine.stop_time[data] / 1;
     //  var ss = parseFloat(secondsToMinutes(ss1));
     $scope.stoparry.push(stop);
     var nodata = $scope.hourwisemachine.no_data[data] / 1;
     //   var ss =  parseFloat(secondsToMinutes(ss1));
     $scope.noarry.push(nodata);
 }


 for (var i in $scope.runarry) {
     var num1 = $scope.runarry[i];
     var num2 = $scope.idlearry[i];
     var num3 = $scope.stoparry[i];

     if (num1 >= num2 && num1 >= num3) {
         if ($scope.noarry[i] < 600) {
             $scope.runarry[i] += $scope.noarry[i];
             $scope.noarry[i] = 0;
         }
     } else if (num2 >= num1 && num2 >= num3) {
         if ($scope.noarry[i] < 600) {
             $scope.idlearry[i] += $scope.noarry[i];
             $scope.noarry[i] = 0;
         }
     } else if (num3 >= num1 && num3 >= num1) {
         if ($scope.noarry[i] < 600) {
             $scope.stoparry[i] += $scope.noarry[i];
             $scope.noarry[i] = 0;
         }
     }

     if (num1 == 0 && num2 == 0 && num3 == 0) {
         $scope.runarry[i] = 0;
         $scope.idlearry[i] = 0;
         $scope.stoparry[i] = 0;
     }
 }


 $scope.runarry1 = [];
 $scope.idlearry1 = [];
 $scope.stoparry1 = [];
 $scope.noarry1 = [];
 for (var data in $scope.runarry) {
     var run = parseFloat(secondsToMinutes($scope.runarry[data]));
     //  var ss =parseFloat(secondsToMinutes(ss1));
     $scope.runarry1.push(run);
     var idle = parseFloat(secondsToMinutes($scope.idlearry[data]));
     // var ss = parseFloat(secondsToMinutes(ss1));
     $scope.idlearry1.push(idle);
     var stop = parseFloat(secondsToMinutes($scope.stoparry[data]));
     //  var ss = parseFloat(secondsToMinutes(ss1));
     $scope.stoparry1.push(stop);

     var nodata = parseFloat(secondsToMinutes($scope.noarry[data]));
     //  var ss = parseFloat(secondsToMinutes(ss1));
     $scope.noarry1.push(nodata);

 }



 Highcharts.chart('hourwise', {
     chart: {
         type: 'bar'
     },
     title: {
         text: 'Machine Status Chart'
     },
     subtitle: {
         text: 'Machine ID : '+$scope.machineName +', Date : '+$scope.viewDate,
         style: {
             color: "#f58632",
             fontSize: "16px"
         }
     },
     xAxis: {
         categories: $scope.hourwisemachine.shift_no.reverse(),
         title: {
             text: 'Shift'
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
             },
             formatter: function () {
                 return Math.ceil(this.total) + 'm';
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
                 format: '{point.y:.0f}', 
                 valueDecimals: 2
             }
         }

     },
     colors: ['#292b2c', '#ec5550', '#e8a249', '#2cbe63'],
     credits: {
         enabled: false
     },
     series: [
         {
             name: 'Nodata',
             data: $scope.noarry1.reverse()
         },
         {
             name: 'Stop',
             data: $scope.stoparry1.reverse()
         }, {
             name: 'Idle',
             data: $scope.idlearry1.reverse()
         }, {
             name: 'Run',
             data: $scope.runarry1.reverse()
         },
     ]
 });
}
//---------------------------------------------------

// ------------------- chart 3 -------------------


$scope.utilizationchart = function () {

          
$scope.runarryul = [];
$scope.idlearryul = [];
$scope.stoparryul = [];
$scope.noarryul = [];

$scope.duration = [];

for (var data in $scope.hourutilization.run_time) {
    var run = $scope.hourutilization.run_time[data] ;
    $scope.runarryul.push(run);
    var idle = $scope.hourutilization.idle_time[data] ;
    $scope.idlearryul.push(idle);
    var stop = $scope.hourutilization.stop_time[data] ;
    $scope.stoparryul.push(stop);
    var nodata = $scope.hourutilization.no_data[data];
    $scope.noarryul.push(nodata);
     var duration1 = $scope.hourutilization.duration[data];
    $scope.duration.push(duration1);

}

//  console.log($scope.duration);

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
for (var data in $scope.runarryul) {
    var run = (secondsToMinutes($scope.runarryul[data])  * 100 / secondsToMinutes($scope.duration[data])) ;
    $scope.runarryul1.push(run);
    var idle = (secondsToMinutes($scope.idlearryul[data])  * 100 / secondsToMinutes($scope.duration[data]));
    $scope.idlearryul1.push(idle);
    var stop = (secondsToMinutes($scope.stoparryul[data])  * 100/ secondsToMinutes($scope.duration[data]));
    $scope.stoparryul1.push(stop);
    var nodata = parseFloat(secondsToMinutes($scope.noarryul[data]) *100/secondsToMinutes($scope.duration[data]));
      $scope.noarryul1.push(nodata);
  
}

Highcharts.chart('utilization', {
    chart: {
        type: 'bar'
        
    },
    title: {
        text: 'Machine Status With Utilization(%) Chart'
    },
    subtitle: {
        text: 'Machine ID : '+$scope.machineName +', Date : '+$scope.viewDate,
        style: {
            color: "#f58632",
            fontSize: "16px"
        }
    },
    xAxis: {
        categories: $scope.hourutilization.shift_no.reverse(),
        title: {
            text: 'Shift'
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
}
// ------------------------------------

        $scope.viewData = function () {
          $scope.myLoader = true;
          $scope.imageshow = 2;
         $scope.viewDate=  moment($scope.from_date).format("DD-MM-YYYY");

           //allcycletimechart
            $http({
                method: 'GET',
                url: $rootScope.api_url + 'api/v1/all_cycle_time_chart_new?machine_id=' + $scope.MachineID + '&shift_id=' +$scope.ShiftID + '&tenant_id=' + $scope.tenant_id + '&date=' + $scope.from_date
            }).then(function (response) {
                $scope.myLoader = false;
                $scope.allcycletime = response.data;
                $scope.allcycletimechart();
               
            })

            //hourwisemachinechart
            $http({
                method: 'GET',
                url: $rootScope.api_url + 'api/v1/shift_machine_status_chart?machine_id=' + $scope.MachineID + '&shift_id=' + $scope.ShiftID + '&tenant_id=' + $scope.tenant_id + '&date=' + $scope.from_date
            }).then(function (response) {
                $scope.myLoader = false;
                $scope.hourwisemachine = response.data;
                $scope.hourwisemachinechart();
                $scope.allcycletimechart();

            })

            //utilizationchart
            $http({
                method: 'GET',
                url: $rootScope.api_url + 'api/v1/shift_machine_utilization_chart?machine_id=' + $scope.MachineID + '&shift_id=' +$scope.ShiftID + '&tenant_id=' + $scope.tenant_id + '&date=' + $scope.from_date
            }).then(function (response) {
                $scope.myLoader = false;
                $scope.hourutilization = response.data;
                $scope.utilizationchart();
                $scope.allcycletimechart();

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


