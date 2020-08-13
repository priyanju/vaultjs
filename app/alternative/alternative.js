'use strict';

angular.module('alternative', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alternative', {
    templateUrl: 'alternative/alternative.html',
    controller: 'alternativeCtrl'
  });
}])

.controller('alternativeCtrl', ['$scope', '$http','$location','$rootScope','$window',
  function($scope, $http,$location,$rootScope,$window,DTOptionsBuilder) {
    $scope.email = localStorage.getItem("email_id");
//$scope.myUrl = $location.absUrl();
$scope.myLoader = true;
$scope.tenant_id=localStorage.getItem("tenant_id");
$rootScope.tenant=$scope.tenant_id;
$scope.username=localStorage.getItem("username");
//$scope.ipaddr = /^\+?\d{3}[.]?\d{}[- ]?\d{}[-]?\d{}$/;
$scope.machineregistration = {id: null,ip:"",user_name:"",pass:"",master_location:"",slave_location:"",machine_id:""};


 $scope.newmachine = function(){  
  
       var machineregistration = {"ip":$scope.ip,"user_name":$scope.user_name,"pass":$scope.pass,"master_location":"/home/part_program","slave_location":"/home/part_program","machine_id":$scope.MachineID};
     
// console.log(p)
// $scope.newmachine = function(){ 
       
//          var alterregistration = {}
     
      if ($rootScope.edit_machine.id== null || $rootScope.edit_machine.id== undefined){
        
      $http({
        method: 'post',
        url: $rootScope.api_url+'api/v1/program_confs',
        data: machineregistration,

        
      })
      

      .success(function(data) {    
       alert(data.status)
       console.log(data)
        if(data){
        

          // alert("Registration completed");
          //$window.location.reload();
          $scope.machineinit();
          $(document).ready(function () {
            $('#machine').modal('hide');
          });
        }
      });
    }
    else
    {        

     
$http({
        method: 'put',
        url: $rootScope.api_url+'api/v1/program_confs/'+$rootScope.edit_machine.id,
        data: machineregistration 
      })
      
      .success(function(data) {  
        console.log(data)
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
    //url:$rootScope.api_url+'api/v1/machines?tenant_id='+$rootScope.tenant
    url:$rootScope.api_url+'api/v1/program_confs?tenant_id='+$rootScope.tenant

  })
  .then(function(response){
    $scope.myLoader = false;
   $rootScope.machines = response.data; 
    console.log($rootScope.machines);

    })
    
}
$http({
    method: 'GET',
    url: $rootScope.api_url + 'api/v1/machines?tenant_id=' + $scope.tenant_id
})
    .then(function (response) {
        $rootScope.allmachines = response.data;
         $scope.MachineID = response.data[0].id;
         console.log($rootScope.data);
    })

$scope.cleandata= function(id) {
      $scope.machineregist = {id: null,ip:"",user_name:"",pass:"",master_location:"",slave_location:"",machine_id:""};
      $scope.ip="";
      $scope.user_name = "";
      
      $scope.pass = "";
      
      $scope.master_location = "";
      $scope.slave_location = "";
      
      $scope.MachineID ="";
      $rootScope.edit_machine = {};
      $scope.machineregistration = angular.copy($scope.machineregist);

    }
  //tableedit 
    $scope.edit = function(test) {
      console.log(test);
      $rootScope.edit_machine = test;
      // $scope.machine_id=$rootScope.edit_machine.machine_id;
   
      $scope.slave_location=$rootScope.edit_machine.slave_location;
      $scope.master_location=$rootScope.edit_machine.master_location;
      $scope.ip=$rootScope.edit_machine.ip;
      $scope.MachineID=$rootScope.edit_machine.machine.id;
      $scope.user_name=$rootScope.edit_machine.user_name;
      $scope.pass=$rootScope.edit_machine.pass;


      console.log($scope.MachineID)




  //  for(i in $rootScope.machines) {
  //           if($rootScope.machines[i].id == id) {
  //             $scope.controller_type = test
  //              var machine_id=$rootScope.machines[i];
  //              $scope.machineregistration = angular.copy(machine_id);
  //           }
           
  //       }
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
console.log(id);
$http.delete($rootScope.api_url+'api/v1/program_confs/'+id).success(function(data) {
        console.log(data)
        

      alert("Deleted Successfully");
      //$window.location.reload();
      $scope.machineinit();
    
      },function(error){
        console.log(error)
      });
}
$scope.filterValue = function($event){
  var inputChar = String.fromCharCode($event.keyCode);
  var patettern = /^[0-9.]+$/;
if(event.charCode!=0){
  if (!patettern.test(inputChar)) {
  // invalid character, prevent input
  event.preventDefault();
  }
}
}
 
}]);
