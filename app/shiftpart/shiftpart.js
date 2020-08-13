'use strict';

angular.module('shiftpart', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shiftpart', {
    templateUrl: 'shiftpart/shiftpart.html',
    controller: 'shiftpartCtrl'
  });
}])

.controller('shiftpartCtrl',function($scope, $http,$location,$rootScope,$window,$log,$timeout,$filter) {


  
  $scope.myLoader=true;
     // console.log($scope.gridOptions)

  $scope.tenant_id=localStorage.getItem("tenant_id") ;

  $scope.momentToday= moment(new Date()).format("YYYY-MM-DD");
  $scope.momentToday2=moment().subtract(60, 'day').format("YYYY-MM-DD");


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


  $http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/shift_part_cal?machine_id=' + $scope.MachineID+'&date='+$scope.from_date+'&shift_id='+$scope.ShiftID
  }).then(function (response) {
                $scope.values = response.data;
                 $scope.myLoader=false;
                console.log($scope.values)
  })
  
  }
$scope.shiftdetails = {id: null,program_number:"",part:""};

$scope.shiftparts = function(){

        var shiftdetails = {"program_number":$scope.shiftdetails.program_number,"part":$scope.shiftdetails.part,"machine_id":$scope.MachineID,"date":$scope.from_date,"shift_id":$scope.ShiftID};
     $http
      ({
        method: 'post',
        url: $rootScope.api_url+'api/v1/shift_part_creation',
        data: shiftdetails  
      })

 
}
$scope.delete = function(id) {
$http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/delete_shift_part?id=' + id
  }).then(function (response) {
                $scope.deletevalue = response.data;
  })


}
$scope.accept = function(id,value){
	$http({
            method: 'GET',
            url: $rootScope.api_url + 'api/v1/shift_part_update?id=' + value+'&status='+id
  }).then(function (response) {
       $scope.accpect = response.data;
  })

}


})