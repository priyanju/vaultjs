'use strict';

angular.module('myApp.reason', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reason', {
    templateUrl: 'reason/reason.html',
    controller: 'reasonCtrl'
  });
}])

.controller('reasonCtrl', function($rootScope,$scope, $http, $location, $window,fileUpload) {

  $rootScope.allmachines=[];
  $scope.fileList = [];
  $scope.masterList = [];
  $scope.slaveList = [];
  $scope.MachineID="";
  $scope.getFile = "";
  $scope.useridforedit = localStorage.getItem("userid");
  console.log($scope.tenant_id)
  $scope.myLoader=true;
  $http({
    method: 'GET',
      url: $rootScope.api_url + 'api/v1/machines?tenant_id=' + $scope.tenant_id
  })
  .then(function (response) {
      $rootScope.allmachines = response.data;
      $scope.myLoader = false;

      console.log($rootScope.allmachines)
      $scope.MachineID = $rootScope.allmachines[0]['id'] || null;
      $scope.machineChange($scope.MachineID);
      console.log($scope.MachineID)
      console.log(response.data)
  })


  $scope.machineChange = function(machine_id){
      $scope.myLoader=true;
    $http({
      method: 'GET',
        url: $rootScope.api_url + 'api/v1/code_compare_reasons?id=' + machine_id
    })
    .then(function(response) {
      // alert(status)
      $scope.reason=response.data;
      // $scope.length=$scope.reason.length;
      // console.log($scope.reason.length)
      $scope.length2=$scope.reason.length
        console.log( $scope.length2)
      if(response.data['status']){
       $scope.myLoader = false;
       setTimeout(function(){ alert(response.data['status']); }, 1000);
      //  $scope.masterList = [];
      //  $scope.slaveList  = [];
      }else{
        $scope.fileList = response.data;
        // $scope.masterList = $scope.fileList['master_location']
        // $scope.slaveList = $scope.fileList['slave_location'];
        $scope.myLoader = false;
      }
    },function(error){
        $scope.myLoader = false;
    })
  }

  $("[data-modal-action=close]").click(function () {
    $("#myModal").modal("hide");
});

// Method : GET
// url : http://192.168.0.237:4000/api/v1/code_compare_reasons?id=41
})




// Method : GET
// url : http://192.168.0.237:4000/api/v1/code_compare_reasons?id=41

