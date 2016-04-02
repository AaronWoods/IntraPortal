'use strict';
//Declare app and any dependency injections
var app = angular.module('intra',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){ //$route providor sets up routing
	//each route includes a url, a html template and a controller to handle activity
	$routeProvider.when('/login',{templateUrl: 'partials/login.html', controller: 'loginCtrl'}); 
	$routeProvider.when('/studentHome',{templateUrl: 'partials/studentHome.html', controller: 'studentCtrl'});
	$routeProvider.when('/companyHome',{templateUrl: 'partials/companyHome.html', controller: 'companyCtrl'});
	$routeProvider.when('/intraHome',{templateUrl: 'partials/intraHome.html', controller: 'intraCtrl'});
	$routeProvider.otherwise({redirectTo: '/login'}); //default route on load up
	
}]);

app.run(function($rootScope, $location, loginService){
	var routePermission=['/studentHome']; //route permission for student system
	$rootScope.$on('$routeChangeStart', function(){ //on route change load
		if(routePermission.indexOf($location.path()) != -1){ //if path change
			var connected =loginService.islogged(); //outsources session check to loginService
			connected.then(function(msg){
				if(!msg.data) $location.path('/login'); //if fail reroute back to login
			});
		}
	});
});

app.run(function($rootScope, $location, loginService){
	var routePermission=['/companyHome']; //route permission for company system
	$rootScope.$on('$routeChangeStart', function(){ //on route change load
		if(routePermission.indexOf($location.path()) != -1){ //if path change
			var connected =loginService.islogged(); //outsources session check to loginService
			connected.then(function(msg){
				if(!msg.data) $location.path('/login'); //if fail reroute back to login
			});
		}
	});
});

app.run(function($rootScope, $location, loginService){
	var routePermission=['/intraHome']; //route permission for intra system
	$rootScope.$on('$routeChangeStart', function(){ //on route change load
		if(routePermission.indexOf($location.path()) != -1){ //if path change
			var connected =loginService.islogged(); //outsources session check to loginService
			connected.then(function(msg){
				if(!msg.data) $location.path('/login'); //if fail reroute back to login
			});
		}
	});
});