'use strict';

angular.module('oee', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oee', {
    templateUrl: 'oee/oee.html',
    controller: 'oeeCtrl'
  });
}])

.controller('oeeCtrl',function($scope, $http,$location,$rootScope,$window,$filter,$interval) {
   
  $scope.myLoader = true;
  $scope.tenant_id=localStorage.getItem("tenant_id");
  $rootScope.tenant=$scope.tenant_id;
  $scope.operatorassignregistration = {id: null,operator_id:null,machine_id:null,shifttransaction_id: null,description:"",target:"",tenant_id:$rootScope.tenant,from_date:null,to_date:null};
  $scope.todaydat=new Date();
  $scope.startDate = moment();
  
  $scope.currentPage = 0;
  $scope.pageSize = 15;
  $rootScope.operator_alls = [];
  $scope.q = '';
  
  $scope.username=localStorage.getItem("username");
  $scope.valuepass = function (id){
    $rootScope.shift_no = id;
    $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/calculate_time?shift_id='+ id 
    }).then(function(response){
     $scope.calculatevalue = response.data; 
     
    })
  }


  $scope.choices = [{"programe_number":'',"idle_run_rate":'',"count":'',"time":''}];
      
    $scope.addNewChoice = function() {
        $scope.result = $scope.choices.filter(elem => elem.actual !== "")
    var movie = {};
    
               movie.programe_number = "";
               movie.idle_run_rate = "";
               movie.count ="";
               movie.time ="";
               $scope.choices.push(movie);

  }

  $scope.sendallvalue = function (){
    var data={
      machine_id:$scope.operatorassignregistration.machine_id,
      shifttransaction_id:$rootScope.shift_no,
      prog_count:$scope.choices,
      date:$scope.from_date,
      duration:$scope.calculatevalue.duration,
      prod_time:$scope.calculatevalue.prod_time,
      balance:$scope.calculatevalue.balance
    }
    $http({
      method: 'post',
      url: $rootScope.api_url+'api/v1/oee_calculations',
      data: data  
    })
    .success(function(data) {
      if(data){
        alert("Value Entered Successfully");
        $window.location.reload();
        }else{
        alert('Value does Not exist');
        }
    })
  
  }

  $http({
          method:'GET',
          url:$rootScope.api_url+'api/v1/oee_calculations?tenant_id='+$rootScope.tenant
        }).then(function(response){
         $scope.oeevalue = response.data; 
        })

  
  $scope.clientinit=function(){
  $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/operator_allocations?tenant_id='+$rootScope.tenant
    })
    .then(function(response){
      $scope.myLoader = false;
     $rootScope.operator_alls = response.data; 
     
      })
  }
  
    $scope.cleandata=function(){
  $scope.operatorall.$setPristine();
      $scope.calculatevalue="";
      $scope.calculate="";
      $scope.time="";
      $scope.partsno="";
      $scope.alloedit=0;
      $scope.cleardata=  {id: null,operator_id:null,machine_id:null,shifttransaction_id: null,description:"",tenant_id:$rootScope.tenant,from_date:null,to_date:null};
      $scope.operatorassignregistration = angular.copy($scope.cleardata);
    }
  
  $scope.alloedit=0;
  $scope.shiftvalueedit=null;
  
  
    $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/operators?tenant_id='+$rootScope.tenant
    })
    .then(function(response){
     $rootScope.operators = response.data; 
      })
  
  $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/machines?tenant_id='+$scope.tenant_id
    })
    .then(function(response){
     $rootScope.operatormachines = response.data; 
      })
    $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/shifts?tenant_id='+$scope.tenant_id
    })
    .then(function(response){
   $scope.shiftdetailfordrop1= response.data; 
   $http({
      method:'GET',
      url:$rootScope.api_url+'api/v1/shifttransactions?shift_id='+ $scope.shiftdetailfordrop1.id
    })
    .then(function(response){
     $rootScope.shiftstransfordrop1 = response.data; 
     console.log($rootScope.shiftstransfordrop1)
        })
   })
  
   $scope.statusColapse= 1;
  
  $scope.getData = function () {
    return $filter('filter')($scope.operator_alls, $scope.q)
  }
  $scope.numberOfPages = function () {
    return Math.ceil($scope.getData().length / $scope.pageSize);
  }
  
  })
  
  .filter('startFrom', function () {
      return function (input, start) {
        if (!input || !input.length) {
          return;
        }
        start = +start; //parse to int
        return input.slice(start);
      }
    });