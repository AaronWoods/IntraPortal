'use strict';

app.controller('loginCtrl', ['$scope','loginService', function($scope,loginService){
	$scope.loginmsg='Login'; //button value
	$scope.availableImages = [ //images stored in array
		{
			src: "http://www.dcu.ie/sites/all/themes/dcu_responsive/images/twitter-icon.jpg"
		},
		{
			src: "http://www.dcu.ie/sites/all/themes/dcu_responsive/images/youtube-icon.jpg"
		},
		{
			src: "http://www.dcu.ie/sites/all/themes/dcu_responsive/images/pintrest-icon.jpg"
		}
	];
	$scope.login=function(user){ //handles login check
		loginService.login(user, $scope); //Process log in attempt to loginService
	}
	$scope.crypt=function(){ //test function for manual encrypting passwords
		loginService.crypt(); //handles test encryption
	}
}]);
