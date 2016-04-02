'use strict';

app.controller('intraCtrl',['$scope','loginService','sessionService', 'intraService', function($scope,loginService,sessionService,intraService){
	$scope.txt='Welcome to the Dcu Intra Portal(INTRA)'; //testing scope text for routing
	$scope.students={}; //list of students in system
	$scope.companies={}; //list of companies in system
	$scope.interviews={}; //list of interview requests in system
	$scope.data={}; //student user information
	$scope.companydata={}; //company user information
	$scope.successfullyposted="submit"; //checks for successful submissions
	$scope.tab=1; //initial interviews tab
	$scope.logout=function(){ //handles logout of session
		loginService.logout();
	}
	
	$scope.checkTab=function(tab){ //handles tab clicks
		return this.tab==tab;
	}
	
	$scope.$on('$routeChangeSuccess', function () { //on load procedures
		$scope.intrauser = sessionService.get('user'); //holds username of user from session storage
		intraService.getStudents($scope); //produces list of students
		intraService.getCompanies($scope); //produces list of companies
		intraService.getInterviews($scope); //produces list of interviews
	});
	
	$scope.postjob=function(company){ //posting a job offer
		intraService.postjob(company, $scope);  //process job addition to intraService
	}	
	
	$scope.addCompany=function(company){ //adding a company to system
		intraService.addCompany(company); //process company to the system to intraService
		$scope.tab=7;
	}
	
	$scope.addStudent=function(student){ //adding a student to system 	
		intraService.addStudent(student); //process student to the system to intraService
		$scope.tab=1;
		$scope.tab=6;
	}
	
	$scope.modifyviewstud=function(student){ //student modification form
		$scope.data=student; //individual student information
		$scope.tab=9; //modify student page
	}
	
	$scope.viewstud=function(student){ //view student profile
		$scope.data=student; //individual student information
		$scope.tab=15; //student profile page
	}
	
	$scope.modStudent=function(){ //modifying student information
		intraService.modStudent($scope); //Process student changes to intraService
	}
	
	$scope.modviewcompany=function(company){ //company modification form
		$scope.companydata=company; //individual company information
		$scope.tab=8; //modify company page
	}
	
	$scope.viewcomp=function(company){ //view company profile
		$scope.companydata=company; //individual company information
		$scope.tab=16; //company profile page
	}
	
	$scope.modCompany=function(){ //modifying company information
		intraService.modCompany($scope); //Process company changes to intraService
	}
	
	/*$(function () {
		$('#containers').highcharts({
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Number of Interviews per student'
			},
			subtitle: {
				text: 'Intra Service'
			},
			xAxis: {
				categories: ['woodsa22', 'gibbos88', 'carrsi99'],
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Number of interviews',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: 'numbers'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: 100,
				floating: true,
				borderWidth: 1,
				backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				name: 'Students',
				data: [1, 5, 3]
			}]
		});
	});*/
}]);