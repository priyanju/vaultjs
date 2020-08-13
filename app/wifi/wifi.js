
'use strict';

angular.module('wifi', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wifi', {
    templateUrl: 'wifi/wifi.html',
    controller: 'wifiCtrl'
  });
}])

.controller('wifiCtrl', ['$scope','$http','$location','$rootScope','$timeout','$window', '$interval', function($scope,$http,$location,$rootScope,$timeout,$window,$interval) {
    $scope.forgot_form = { user_name: "", password: "" };
     
    $scope.inputType = 'password';

// Hide & show password function
$scope.hideShowPassword = function(){
  
 if ($scope.inputType == 'password')
   $scope.inputType = 'text';
 else
   $scope.inputType = 'password';
};
          





                    
$scope.sinin = function () {
  $scope.isdisabled = true;
  console.log( $scope.forgot_form)


      $http
        ({
          method: 'Get',
          url: $rootScope.api_url + 'api/v1/wifi_name_list'
        })

        .then(function(response){
          $rootScope.lotch = response; 
          console.log( $rootScope.lotch.data)

           })

      }
   $scope.signin = function () {
     $scope.isdisabled = true;
     console.log( $scope.forgot_form)
     var forgot_form =
       {
         "user_name": $scope.forgot_form.user_name,
         "password": $scope.forgot_form.password
       }

         $http
           ({
             method: 'Get',
             url: $rootScope.api_url + 'api/v1/wifi_config?user_name='+ $scope.forgot_form.user_name + '&&password=' + $scope.forgot_form.password
           })
            .then(function(response) {
      if(response.data['status']){

       var el = document.getElementById("popup1");

        el.classList.remove("overlay");
        el.classList.add("appear");
        var times = -60;
var promise = $interval(
   function () {
      $scope.retryMessage = times++;
   }, 1000, 0);

$timeout(function () {

$window.location = '/#!/login';

  }, 60000);
  
                   }
           
        }
    )
          }
        // return this.http.get('production_part_report?machine_name=' + register.machine_name +'&&shift_num=' +register.shift_num +'&&from_date='+ register.date )

}]);