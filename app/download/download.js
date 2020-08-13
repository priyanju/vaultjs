'use strict';

angular.module('myApp.download', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/download', {
    templateUrl: 'download/download.html',
    controller: 'downloadCtrl'
  });
}])

.controller('downloadCtrl', function($rootScope,$scope, $http, $location, $window,fileUpload) {

   
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
      $scope.MachineID = $rootScope.allmachines[0]['id'] || null;
      $scope.machineChange($scope.MachineID);
      console.log(response.data)
  })
//   var confirmationContainer = angular.module("confirmationContainer", []);

// confirmationContainer.controller("confirmationController", function($scope) {
//   $scope.confirmationDialogConfig = {};
  
//   $scope.confirmationDialog = function() {
//     $scope.confirmationDialogConfig = {
//       title: "Caution!!!",
//       message: "Are you sure you want to delete?",
//       buttons: [{
//         label: "Delete",
//         action: "delete"
//       }]
//     };
//     $scope.showDialog(true);
//   };

//   $scope.multiConfirmationDialog = function() {
//     $scope.confirmationDialogConfig = {
//       title: "Select Operation...",
//       message: "Please select which operation you would like to perform.",
//       buttons: [{
//         label: "Delete",
//         action: "delete"
//       }, {
//         label: "Close",
//         action: "close"
//       }]
//     };
//     $scope.showDialog(true);
//   };

//   $scope.executeDialogAction = function(action) {
//     if(typeof $scope[action] === "function") {
//     		  $scope[action]();
//     	}
//   };

//   $scope.reset = function() {
//     console.log("Resetting...");
//     $scope.showDialog();
//   };
  
//   $scope.delete = function(data) {
//     console.log("Deleting...");
//     console.log(data)
//     $scope.showDialog();
//   };
  
//   $scope.save = function() {
//     console.log("Saving...");
//     $scope.showDialog();
//   };
  
//   $scope.showDialog = function(flag) {
//     jQuery("#confirmation-dialog .modal").modal(flag ? 'show' : 'hide');
//   };
// });

  $scope.machineChange = function(machine_id){
      $scope.myLoader=true;
    $http({
      method: 'GET',
        url: $rootScope.api_url + 'api/v1/backup_file_list?id=' + machine_id
    })


    // http://183.82.250.137:4000/api/v1/backup_file_list?id=40
    .then(function(response) {
      // alert(status)
      if(response.data['status']){
       $scope.myLoader = false;
       setTimeout(function(){ alert(response.data['status']); }, 1000);
       $scope.backupList = [];
      }else{
        $scope.fileList = response.data;
        $scope.backupList = $scope.fileList['backup_location']
        // $scope.slaveList = $scope.fileList['slave_location'];
        $scope.length1=$scope.backupList.length
        console.log( $scope.backupList)
        $scope.myLoader = false;
      }
    },function(error){
        $scope.myLoader = false;
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

//   $scope.download = function(machineData,position){
//     console.log(machineData,position)
    
//     var data = {
//       "id": $scope.MachineID,
//       "file_name": machineData['name'],
//       "user_id": $scope.useridforedit,
//       "position": position
//    }
//     $http({
//       method: 'post',
//         url: $rootScope.api_url + 'api/v1/file_download',
//         data: data
//     })
//     // http://192.168.0.237:4000/api/v1/backup_upload?
//     .then(function(response) {
//       console.log(response)
//       var link = document.createElement("a");
//       link.download = machineData['name'];
//       var data = "text/json;charset=utf-8," + encodeURIComponent(response.data);
//       link.href = "data:" + data;
//       link.click();
//     });
//   }  
    

//   $scope.uploadFile = function(){
//     console.log($scope.myFile,$scope.myReason)
//     var file = $scope.myFile;
//     var reason = $scope.myReason;

//     // alert(data.status);

//     if(file!=undefined){
//       $scope.myLoader = true;
//       $scope.getFile = file;
      
//       var uploadUrl = "api/v1/backup_upload";
      

//       $scope.uploadFileToUrl(file, uploadUrl,$scope.MachineID,reason);
//       //$scope.myLoader = false;
//       //$scope.uploadMachineID = "";
//       $("input[type='file']").val('');
//       $("input[type='text']").val('');
     
//     }else{
//       alert("Please select any file to upload")
//     }

    
// };

// $scope.uploadFileToUrl = function(file, uploadUrl,machine_id,myReason){
//   var fd = new FormData();
//   fd.append('file', file);
//   fd.append('machine_id',machine_id)
//   fd.append('reason',myReason)

//   console.log(file)
//   $http.post($rootScope.api_url +uploadUrl, fd, {
//       transformRequest: angular.identity,
//       headers: {'Content-Type': undefined}
//   })
//   .success(function(file){
//     $scope.myLoader = false;
//     alert(file.status);
//     $scope.machineChange($scope.MachineID);
//   })
//   .error(function(error){
//     alert(error);

//   });
// }

// $scope.deleteDialog=function(data,position){
//   $scope.position = position;
//   $scope.fileObjectData = data ;
// }

// $scope.delete = function() {
//   //$scope.myLoader=true;
//   var data = {
//         "id": $scope.MachineID,
//         "file_name": $scope.fileObjectData['name'],
//         "user_id": $scope.useridforedit,
//         "reason": $scope.reason,
//         "position": $scope.position
//     }
//     $http({
//       method: 'post',
//         url: $rootScope.api_url + 'api/v1/file_delete',
//         data: data
//     })
//     .then(function(response) {
//       console.log(response)
//       //$scope.myLoader=false;
//       //setTimeout(function(){ alert("File is Deleted Successfully"); }, 1000);
//       alert("File is Deleted Successfully")
//       $scope.machineChange($scope.MachineID);

//     },function(error){
//       $scope.myLoader=false;
//       console.log(error)
//     });
//   }

// })


// .directive('fileModel',function ($parse) {
//   return {
//       restrict: 'A',
//       link: function(scope, element, attrs) {
//           var model = $parse(attrs.fileModel);
//           var modelSetter = model.assign;
          
//           element.bind('change', function(){
//               scope.$apply(function(){
//                   modelSetter(scope, element[0].files[0]);
//               });
//           });
//       }
//   };
// }).service('fileUpload', ['$http','$rootScope', function ($http,$rootScope) {
  
  
// }]);
$scope.download = function(machineData,position){
  console.log(machineData,position,)
  
  var data = {
    "id": $scope.MachineID,
    "file_name": machineData,
    "user_id": $scope.useridforedit,
    "position": position
 }
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
  console.log($scope.myFile,$scope.myReason, $scope.useridforedit )
  var file = $scope.myFile;
  var reason = $scope.myReason;

  // alert(data.status);

  if(file!=undefined){
    $scope.myLoader = true;
    $scope.getFile = file;
    
    var uploadUrl = "api/v1/backup_upload";
    

    $scope.uploadFileToUrl(file, uploadUrl,$scope.MachineID,reason, $scope.useridforedit);
    //$scope.myLoader = false;
    //$scope.uploadMachineID = "";
    $("input[type='file']").val('');
    $("input[type='text']").val('');
   
  }else{
    alert("Please select any file to upload")
  }

  
};

$scope.uploadFileToUrl = function(file, uploadUrl,machine_id,myReason,useridforedit){
var fd = new FormData();
fd.append('file', file);
fd.append('machine_id',machine_id)
fd.append('reason',myReason)
fd.append('user_id',useridforedit)

console.log(file)
$http.post($rootScope.api_url +uploadUrl, fd, {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
})
.success(function(file){
  $scope.myLoader = false;
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
      "user_id": $scope.useridforedit,
      "reason": $scope.reason,
      "position": $scope.position
  }
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
    $scope.machineChange($scope.MachineID);

  },function(error){
    $scope.myLoader=false;
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



// Method : GET
// url : http://183.82.250.137:4000/api/v1/backup_file_list?id=40