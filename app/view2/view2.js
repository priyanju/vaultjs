'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($rootScope,$scope, $http, $location, $window,fileUpload) {

 $rootScope.allmachines=[];
  $scope.fileList = [];
  $scope.masterList = [];
  $scope.slaveList = [];
  $scope.MachineID="";
  $scope.getFile = "";
  $scope.useridforedit = localStorage.getItem("userid");
  console.log($scope.tenant_id)
  // $scope.myLoader=true;


  
  $scope.momentToday= moment(new Date()).format("DD-MM-YYYY");
  $scope.momentToday2=moment().subtract(60, 'day').format("DD-MM-YYYY");
  $http({
    method: 'GET',
      url: $rootScope.api_url + 'api/v1/machines?tenant_id=' + $scope.tenant_id
  })
  .then(function (response) {
      $rootScope.allmachines = response.data;
      $scope.MachineID = $rootScope.allmachines[0]['id'] || null;
      $scope.machineChange($scope.MachineID);
      console.log(response.data)
  })


  $scope.machineChange = function(machine_id){
    console.log(machine_id)
    $scope.machineid=machine_id;
      // $scope.myLoader=true;
    $http({
      method: 'GET',
        url: $rootScope.api_url + 'api/v1/file_list?id=' + machine_id
    })
    .then(function(response) {
      // alert(status)
      if(response.data['status']){
      //  $scope.myLoader = false;
       setTimeout(function(){ alert(response.data['status']); }, 1000);
       $scope.masterList = [];
       $scope.slaveList  = [];
      }else{
        $scope.fileList = response.data;
        $scope.masterList = $scope.fileList['master_location']
        $scope.slaveList = $scope.fileList['slave_location'];
        console.log( $scope.slaveList)
        $scope.length1=$scope.slaveList.length
        console.log( $scope.length1)
        $scope.length2=$scope.masterList.length
        console.log( $scope.length2)
        // $scope.myLoader = false;
      }
    },function(error){
        // $scope.myLoader = false;
    })
  }

  $("[data-modal-action=close]").click(function () {
    $("#myModal").modal("hide");
  
});

  $scope.popup = function(id) {
  console.log(id)
    $http.post($rootScope.api_url+'api/v1/file_delete/'+id).success(function(id) {
            
            if(id){
    
          alert("Deleted Successfully");
          //$window.location.reload();
          $scope.machineinit();
            }else{      
            alert('Delete Failed');   
            }
          });
    }

//     Method : POST
// url : http://183.82.250.137:4000/api/v1/file_download?
// Parameters :
// {
//    "id": "40",
//    "file_name": "show_html.txt",
//     "user_id": "56",
//     "position": "Master"
// }




$scope.new_check = function(demo){

    console.log(demo,"test")
   
    console.log(demo)
    console.log($rootScope.allmachines[0]['id']);

    $http({
      method: 'get',
        url: $rootScope.api_url + 'api/v1/file_receive_from_cnc?file_name='+demo+'&&machine_id='+$scope.machineid,
    })
     .then(function(response) {
      if(response.data['status']){
        //  $scope.myLoader = false;
         //setTimeout(function(){ alert(response.data['status']); }, 1000);
          alert(response.data['status']);
       $window.location.reload();
      console.log(response)
      }
 },function(error){
      console.log(error)
    });

  }

  $scope.download = function(machineData,position){
    console.log(machineData,position)
    
    var data = {
      "id": $scope.MachineID,
      "file_name": machineData,
      "user_id": $scope.useridforedit,
      "position": position
   }
   console.log(data)
    $http({
      method: 'post',
        url: $rootScope.api_url + 'api/v1/file_download',
        data: data
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
    

  $scope.uploadFile = function(){
    console.log($scope.myFile,$scope.user_name,$scope.useridforedit)
    var file = $scope.myFile;
    var user = $scope.user_name;
     
    // alert(data.status);

    if(file!=undefined){
      // $scope.myLoader = true;
      $scope.getFile = file;
      console.log(file)
      var uploadUrl = "api/v1/file_upload";
      

      $scope.uploadFileToUrl(file, uploadUrl,$scope.MachineID,$scope.user_name,$scope.revision_no,$scope.date);
      //$scope.myLoader = false;
      //$scope.uploadMachineID = "";
      $("input[type='file']").val('');
      $("input[type='text']").val('');
     
    }else{
      alert("Please select any file to upload")
    }

    
};

$scope.uploadFileToUrl = function(file, uploadUrl,machine_id,user_name,revision_no,date)
{
  var fd = new FormData();
  fd.append('file', file);
  fd.append('machine_id',machine_id)
  fd.append('user_name',user_name)
  fd.append('revision_no',revision_no)
  fd.append('date',date)

  // fd.append('user_id',useridforedit)

  
  console.log(file)
  $http.post($rootScope.api_url +uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
      
  })
  .success(function(file){
    // $scope.myLoader = false;
    alert(file.status);
    $scope.machineChange($scope.MachineID);
  })
  .error(function(error){
    alert(error);

  });
}

$scope.deleteDialog=function(data,position){
  $scope.position = position;
  $scope.fileObjectData = data ;
}

$scope.delete = function() {
  //$scope.myLoader=true;
  var data = {
        "id": $scope.MachineID,
        "file_name": $scope.fileObjectData['name'],
        "reason": $scope.reason,
        "user_name":$scope.name,
        "date":$scope.date
    }
    console.log($scope.fileObjectData['name'],)

    $http({
      method: 'post',
        url: $rootScope.api_url + 'api/v1/file_delete',
        data: data
    })
    .then(function(response) {
      console.log(response)
      //$scope.myLoader=false;
      //setTimeout(function(){ alert("File is Deleted Successfully"); }, 1000);
      alert("File is Deleted Successfully")
      $scope.reason="";
      $("input[type='text']").val('');

      $scope.machineChange($scope.MachineID);
      // $("input[type='text']").val('');


    },function(error){
      // $scope.myLoader=false;
      console.log(error)
    });
  

  }

  $scope.upload = function(demo){
    console.log(demo,"test")
   
    console.log(demo)
    console.log($rootScope.allmachines[0]['id']);

    
    $http({
      method: 'get',
        url: $rootScope.api_url + 'api/v1/file_send_to_cnc?file_name='+demo+'&&machine_id='+$scope.machineid,
    })
     .then(function(response) {
      if(response.data['status']){
        //  $scope.myLoader = false;
        // setTimeout(function(){ alert(response.data['status']); }, 1000);
          alert(response.data['status']);
         $window.location.reload();
         
      console.log(response)
      }
 },function(error){
      console.log(error)
    });
  }

  
  $scope.new = function(demo){
    console.log(demo,"priya")
   console.log(demo)
    console.log($rootScope.allmachines[0]['id']);
  

    $http({
      method: 'get',
        url: $rootScope.api_url + 'api/v1/send_to_file?file_name='+demo+'&&machine_id='+$scope.machineid,
    })
     .then(function(response) {
      if(response.data['status']){
        //  $scope.myLoader = false;
         setTimeout(function(){ alert(response.data['status']); }, 1000);
      console.log(response)
      }
 },function(error){
      console.log(error)
    });
  }
  $scope.check=function(test){
    console.log(test)
    $scope.file_name=test;
    console.log($rootScope.allmachines[0]['id']);
  

    $http({
      method: 'get',
        url: $rootScope.api_url + 'api/v1/receive_file?file_name='+$scope.file_name+'&&machine_id='+$scope.machineid,
    })
     .then(function(response) {
      if(response.data['status']){
        //  $scope.myLoader = false;
         setTimeout(function(){ alert(response.data['status']); }, 1000);
      console.log(response)
      }
 },function(error){
      console.log(error)
    });
  }

})


.directive('fileModel',function ($parse) {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
              scope.$apply(function(){
                  modelSetter(scope, element[0].files[0]);
              });
          });
      }
  };
}).service('fileUpload', ['$http','$rootScope', function ($http,$rootScope) {
  
  
}]);



// Method : POST
// url : http://192.168.0.237:4000/api/v1/file_delete?
// Parameters :
// {
//     "id": "40",
//     "file_name": "show_html.txt",
//     "user_id": "56",
//     "reason": "Test for delete check in Master from saravanan system",
//     "position": "Master"
// }