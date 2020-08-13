'use strict';

angular.module('login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
  }])

  .controller('LoginCtrl', ['$scope', '$http', '$location', '$window', '$rootScope',
    function ($scope, $http, $location, $window, $rootScope) {

      $scope.email = {
        text: 'me@example.com'
      };
      $scope.login = { email_id: "", password: "" };
     
       $scope.inputType = 'password';
  
  // Hide & show password function
  $scope.hideShowPassword = function(){
    if ($scope.inputType == 'password')
      $scope.inputType = 'text';
    else
      $scope.inputType = 'password';
  };
                          
      $scope.signin = function () {
        $scope.isdisabled = true;
        var login =
          {
            "email_id": $scope.login.email_id,
            "password": $scope.login.password
          }
 
            $http
              ({
                method: 'post',
               // url: $rootScope.api_url + 'api/v1/sessions',
                url: $rootScope.api_url + 'api/v1/login',
                data: login
              })

              .success(function (data) {
                if (data.usertype_id == 1) {
                  $scope.isdisabled = false;
                  $http.defaults.headers.common.Authorization = 'Bearer '+data.access_token;
                  localStorage.setItem("tenant_id", data.tenant_id);
                  $rootScope.getId = data.tenant_id;
                  localStorage.setItem("userid", data.id)
                  localStorage.setItem("username", data.first_name);
                  localStorage.setItem("role_id", data.role_id);
                  localStorage.setItem("usertype_id", data.usertype_id);
                  localStorage.setItem("role_name", data.role_name);
                  localStorage.setItem("access_token", data.access_token);
                  localStorage.setItem("last_name", data.user.last_name);
                  localStorage.setItem("email_id", data.user.email_id);
                  localStorage.setItem("change_pass", data.user.default);

                  $scope.const();
                  $rootScope.logInfo = 2;
                  $window.location = '/#!/machine_registration';
                } else if (data.usertype_id == 2) {
                  $http.defaults.headers.common.Authorization = 'Bearer '+data.access_token;
                  localStorage.clear();
                  localStorage.setItem("username", data.first_name);
                  localStorage.setItem("usertype_id", data.usertype_id);
                  $scope.const();
                  $window.location = '/#!/companydetails';
                } else {
                  $scope.isdisabled = false;
                  alert('The username or password is incorrect');
                }
              })
       
      }
      /*start registration*/
      
     $scope.forgot = { email_id: "", phone_number: "" };
      $scope.forgotSubmit=function(){

        $http
        ({
          method: 'get',
          url: $rootScope.api_url + 'api/v1/sessions/forgot_pwd?email_id='+ $scope.forgot.email_id+'&phone_number='+$scope.forgot.phone_number
        })
        .success(function (data) {

          if(data == true){

            alert('Check Your Mail and Reset Your Password');
            console.log($scope.forgot);
            $('#forgot').modal('hide');
          }else{
            alert('Please enter Correct Email or phone Number');
          }

        }).error(function (data){

        })

      
      }

      $scope.clearForgot=function(){
        $scope.forgot = { email_id: "", phone_number: "" };
      }


    }])
   
    .directive('autofocus', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        link : function($scope, $element) {
          $timeout(function() {
            $element[0].focus();
          });
        }
      }
    }]);
