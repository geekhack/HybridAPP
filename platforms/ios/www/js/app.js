  
var app = angular.module('myApp', ['onsen']);

app.controller('SplitterController', function() {
    this.load = function(page) {
      mySplitter.content.load(page)
        .then(function() {
          mySplitter.left.close();
        });
    };
  });
  

app.controller('myCtrl', function($scope,$http,$location) 
{
    $scope.user={};

    

    $scope.clickHandler=function(event)
    {  
       
       //the ip below is dependent on the machine holding the file
       $http.get('http://training.anu.ac.ke/loginadtest.php?&username='+$scope.user.username+'@anu.ac.ke'+'&password='+$scope.user.password).then(function(response)
       {
          //create a session variable
          sessionStorage.setItem('key',response.data.user);
          
          window.location='main.html';
          //alert(response.data.user);
          
      
      },function(err)
      {
        //notify the user if the login fails to retry
          ons.notification.alert("Wrong Username or Password");
      });
      
    
    }; 
    //get the session variable and assig to the user's display name 
    $scope.user.useer=sessionStorage.getItem('key');
       
           
    
});

app.controller('coursesCtrl', function($scope,$http,$window)
{
  var n=sessionStorage.getItem('key');
  var m=n.substring(0, n.indexOf('@') + '?'.length);
  
  //trim the anu part
  $scope.loggedinuser=m.replace(/(\s*)(\@)+/g,"");
 
  var courses=function()
  {
    
    $http.get('http://training.anu.ac.ke/test.php?&studentnum='+$scope.loggedinuser).then(function(response)
       {
         $scope.mycourses=response.data.course; 
          
       },function(err)
       {
          //notify the user no courses found
          ons.notification.alert("could not get courses for you.");
       });
    
  };

  courses();

  $scope.logoutUser=function(event)
    {  
       
         //create a session variable
          sessionStorage.clear();//('key',response.data.user);
          ons.notification.alert("Successfully logged out");
          window.location='index.html';
          //alert(response.data.user);         
      
      
    
    }; 
});



