angular.module("camTaylorWeddingApp")
.controller("MainController", function($scope, facebookLoginService){
    $scope.facebookLogin = function(){
        facebookLoginService.loginWithFacebook();
        console.log("It works.")
    }
    
    $scope.test = "Cameron & Taylor"
    
});