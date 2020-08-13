'use strict';

angular.module('machine_reg', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/machine_registration', {
    templateUrl: 'machine_registration/machine_registration.html',
    controller: 'Machine_registrationCtrl'
  });
}])

.controller('Machine_registrationCtrl', ['$scope', '$http','$location','$rootScope','$window',
  function($scope, $http,$location,$rootScope,$window,DTOptionsBuilder) {
    $scope.email = localStorage.getItem("email_id");
    $scope.role_name = localStorage.getItem("role_name");
    $rootScope.role_name = $scope.role_name;

//$scope.myUrl = $location.absUrl();
$scope.myLoader = true;
$scope.tenant_id=localStorage.getItem("tenant_id");
$rootScope.tenant=$scope.tenant_id;
$scope.username=localStorage.getItem("username");
//$scope.ipaddr = /^\+?\d{3}[.]?\d{}[- ]?\d{}[-]?\d{}$/;
$scope.machineregistration = {id: null,machine_name:"",machine_model:"",controller_type:"",machine_serial_no:"",machine_type:"",machine_ip:"",unit:"",device_id:"",tenant_id: null};


 $scope.newmachine = function(){  
  
        var machineregistration = {"machine_name":$scope.machineregistration.machine_name,"controller_type":$scope.machineregistration.controller_type,"machine_model":$scope.machineregistration.machine_model,"machine_serial_no":$scope.machineregistration.machine_serial_no,"machine_type":$scope.machineregistration.machine_type,"machine_ip":$scope.machineregistration.machine_ip,"unit":$scope.machineregistration.unit,"device_id":$scope.machineregistration.device_id,"tenant_id": $scope.tenant_id,
         };
     
      if ($scope.machineregistration.id== null){
       // alert(machineregistration.machine_ip);
      $http({
        method: 'post',
        url: $rootScope.api_url+'api/v1/machines',
        data: machineregistration  
      })
      
      .success(function(data) {    
        if(data){
       
      alert("Registration completed");
      //$window.location.reload();
      $scope.machineinit();
      $(document).ready(function () {
   $('#machine').modal('hide');
 });
        }else{      
        alert('Registration Failed');   
        }
      });
    }
    else
    {
     
$http({
        method: 'put',
        url: $rootScope.api_url+'api/v1/machines/'+$scope.machineregistration.id,
        data: machineregistration  
      })
      
      .success(function(data) {  
        if(data){    
        alert("Updated Successfully");
       // $window.location.reload();
       $scope.machineinit();
       $(document).ready(function () {
   $('#machine').modal('hide');
 });
        }else{      
        alert('Updation Failed');   
        }
      });
    }
    }


/*app.js end*/
$scope.machineinit=function(){
$http({
    method:'GET',
    url:$rootScope.api_url+'api/v1/machines?tenant_id='+$rootScope.tenant
  })
  .then(function(response){
    $scope.myLoader = false;
   $rootScope.machines = response.data; 
   
   
    })
}
$scope.cleandata= function(id) {
  $scope.machineregist = {id: null,machine_name:"",machine_model:"",controller_type:"",machine_serial_no:"",machine_type:"",machine_ip:"",unit:"",device_id:"",tenant_id: null};
 $scope.machineregistration = angular.copy($scope.machineregist);

    }
  //tableedit 
    $scope.edit = function(id,test) {
   var i;
   for(i in $rootScope.machines) {
            if($rootScope.machines[i].id == id) {
              $scope.controller_type = test
               var machine_id=$rootScope.machines[i];
               $scope.machineregistration = angular.copy(machine_id);
            }
           
        }
    }
$scope.axisfun = function (id){

  $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/machine_setting_list?machine_id='+id+'&tenant_id='+$rootScope.tenant
    })
    .then(function(response){
     $scope.machinesaxis = response.data; 
    // console.log($scope.machinesaxis);
     
      })
  }
  $scope.setStatus = function(status,id){
 
  $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/machine_setting_update?machine_setting_list_id='+id+'&is_active='+status
    })
    .then(function(response){
      $scope.myLoader = false;
     $scope.updateaxis = response.data; 
     
      })
    }
$scope.delete = function(id) {

$http.delete($rootScope.api_url+'api/v1/machines/'+id).success(function(data) {
        
        if(data){

      alert("Deleted Successfully");
      //$window.location.reload();
      $scope.machineinit();
        }else{      
        alert('Delete Failed');   
        }
      });
}

}]);






