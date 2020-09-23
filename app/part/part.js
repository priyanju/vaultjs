'use strict';

angular.module('part', ['ngRoute','ngSanitize','ui.bootstrap', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/part', {
    templateUrl: 'part/part.html',
    controller: 'partCtrl'
  });
}])

.controller('partCtrl',function($scope, $http,$location,$rootScope,$window,$filter,$interval) {

    $scope.useridforedit = localStorage.getItem("userid");
    console.log($scope.tenant_id);

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
            url: $rootScope.api_url + 'api/v1/part_doc_index?id=' + machine_id
        })
        .then(function(response) {
          // alert(status)
          $scope.reason=response.data;
          console.log($scope.cname);
          $scope.val=response.data[0].id;
          $scope.cname=response.data[0].customername;
          $scope.jname=response.data[0].job_name;
          console.log($scope.jname);
          console.log($scope.val)
          var latch = $scope.val
          console.log(latch)

          // $scope.length=$scope.reason.length;
          // console.log($scope.reason.length)
        //   $scope.length2=$scope.reason.length
        //     console.log( $scope.length2)
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


    $scope.uploadFile = function(){
      console.log($scope.myFile, $scope.useridforedit )

      var file = $scope.myFile;
      var id = $scope.MachineID;
      console.log($scope.myFile)
      console.log(id)

      // var reason = $scope.myReason;
    
    //  alert(data);
    
      if(file!=undefined){
        $scope.myLoader = true;
        $scope.getFile = file;
        console.log($scope.getFile)
        
        var uploadUrl = "api/v1/part_doc_upload";
        
    
        $scope.uploadFileToUrl(file, uploadUrl,$scope.MachineID);
        //$scope.myLoader = false;
        //$scope.uploadMachineID = "";
        $("input[type='file']").val('');
        $("input[type='text']").val('');
       
      }else{
        alert("Please select any file to upload")
      }
    
      
    };

    $scope.uploadFileToUrl = function(file, uploadUrl,latch){

      var fd = new FormData();
fd.append('file', file);
fd.append('id',latch)

console.log(fd)
$http.post($rootScope.api_url +uploadUrl, fd, {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
})
.success(function(file){
  $scope.myLoader = false;
  alert("File uploaded successfully")

  alert(file.status);
  $scope.machineChange($scope.MachineID);
})
.error(function(error){
  alert(error);

});
    }


    $scope.download = function(machineData,position){
      console.log(machineData,position)
      
      var data = {
        "id": $scope.MachineID,
        // "file_name": machineData,
        // "user_id": $scope.useridforedit,
        // "position": position
     }
     console.log(data)
      $http({
        method: 'GET',
      url: $rootScope.api_url + 'api/v1/file_download1?id=' + $scope.MachineID
      })
      .then(function(response) {
        console.log(response)
        var link = document.createElement("a");
        link.download = machineData;
        var data = "text/json;charset=utf-8," + encodeURIComponent(response.data);
        link.href = "data:" + data;
        link.click();
      });
    }  

    $scope.edit = function(num,id,test) 
    {
      // console.log(id,test);
      $scope.cuname = id;
      $scope.joname = test;
      $scope.impo = num;
      console.log(num)
       console.log($scope.impo,$scope.joname,$scope.cuname)
      $http
// ({
//   method: 'put',
//   url: $rootScope.api_url+'api/v1/part_doc_edit/'+$scope.val,
// })
          }
         
      
          // http://192.168.0.237:4000/api/v1/part_doc_edit?id=1

    $scope.uplooadFile = function(){
      console.log($scope.jobname, $scope.impo,$scope.customername )

      var job_name = $scope.jobname;
      var id_num = $scope.impo;
     var customer_name = $scope.customername;
      console.log(customer_name) 
      console.log(job_name)
      console.log(id_num)


    };
      
    
    $scope.uplooadeditdata = function(id,cuname,gjgj) {
    console.log(id,cuname,gjgj)

    $http
({
  method: 'put',
  url: $rootScope.api_url+'api/v1/part_doc_edit/'+id,
})
    }

    $scope.router = function() {

      $window.location = '/#!/reason';



  
     
      }
 

})    