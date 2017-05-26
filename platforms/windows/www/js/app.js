  
var app = angular.module('myApp', ['onsen']);

app.controller('myCtrl', function($scope,$http,$location) 
{
    $scope.user={};
    $scope.user.useer="rwanjiku";


    $scope.clickHandler=function(event)
    {
       
       //ons.notification.alert("good thing");
       window.location='main.html';

       /*$http.get('http://127.0.0.1/androidapp1/loginadtest.php?&username='+$scope.user.username+'&password='+$scope.user.password).then(function(response)
       {
         
         $scope.myData=response.data.data;
         //console.log(response.data.data);
         window.location='../../Nazarene/www/page2.html';

      
      },function(err)
      {
          ons.notification.alert("Wrong Username or Password");
      });
       */
    
  };      
    
});
