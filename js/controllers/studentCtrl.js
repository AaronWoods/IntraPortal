'use strict';

//Student Controller
app.controller('studentCtrl',['$scope','loginService','sessionService','dataService', function($scope,loginService,sessionService,dataService){
	$scope.txt='Welcome to the Dcu Intra Portal(STUDENT)';  //testing scope text for routing
	$scope.tab=7; //initial interview tab
	$scope.data={}; //Student user information
	$scope.availjobs={}; //list of available jobs
	$scope.closedjobs={}; //list of closed jobs
	$scope.viewjob={}; //handles the viewing of an individual job
	$scope.confirm={}; //handles confirmation of interview
	$scope.viewReview={}; //handles the viewing of an idividual review
	$scope.reviews={}; //list of reviews
	$scope.interviews={}; //list of interviews
	$scope.companydata={}; //handles the viewing of an individual company profile 
	$scope.preference = $scope.data.preferences; //initialises easy to use preference variable
	$scope.preference = angular.identity; //give preference an identity which can be used for ordering ng-repeat listings
	$scope.review={cname:"",date: new Date(),author:"",body:""}; //sets up posting reviews environment
	$scope.logout=function(){ //handles logout of session
		loginService.logout();
	}
	
	$scope.postReview=function(){ //handles posting a new review
		var now = new Date(); 
		var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		var year = today.getFullYear();
		var month = today.getMonth();
		var day = today.getDate();
		day = ("0" + (day)).slice(-2)
		month = ("0" + (month + 1)).slice(-2)
		var d = ""+year+"-"+month+"-"+day+""
		$scope.review.date=d; //gets todays date and adds it to review.data for posting new review
		
		dataService.updateReviews($scope.review); //process post of review to the dataService
	}
	
	$scope.view=function(job){ //Viewing an individual job in detail
		$scope.viewjob=job;// initialises individual job being requested to be viewed to its own variable
		$scope.tab=8; //change tab to job view page(can apply)
	}
	
	$scope.viewClosed=function(job){ //viewing a closed job
		$scope.viewjob=job; //initialises individual job being requested to be viewed to its own variable
		$scope.tab=12; //change tab to closed job view page (cannot apply)
	}
	
	$scope.confirminterview=function(interview){ //confirmation of interview requests
		$scope.confirm=interview; //initialises individual interview being confirmed to its own variable
		dataService.confirm($scope); //Process confirmation in dataService
	}
	
	$scope.reviewView=function(review){ //view a review in detail
		$scope.viewReview=review; //initialises individual review to its own variable
		$scope.tab=10; //change tab to review view page
	}
	
	$scope.checkTab=function(tab){ //checks tab to make tab class active (tab visuals)
		return this.tab==tab;
	}
	
	$scope.tabchange=function(tab){ //handles tab clicks
		$scope.tab=tab;
		$scope.applymsg="Apply"; //Reset apply button value
	}
	
	$scope.$on('$routeChangeSuccess', function () { //on load procedures
		$scope.username = sessionService.get('user'); //holds username of user from session storage
		dataService.getdata($scope); //get student user information
		dataService.getJobs($scope); //get list of jobs that are available
		dataService.closedJobs($scope); //get list of jobs that are closed
		dataService.getReviews($scope); //get list of reviews
		dataService.getInterviews($scope); //get list of interview notifications
	});
	
	$scope.update=function(){ //updating user profile
		dataService.update($scope); //process profile update to dataService
	}
	
	$scope.apply=function(){ //applying to a job
		$scope.viewjob.username=$scope.username; //adds username to viewjob variable(applied through view job page)
		dataService.apply($scope); //Process applying to jobs to dataService
	}
	
	$scope.viewcprofile=function(){ //viewing individual company profile
		dataService.viewcprofile($scope); //processes company information fetch to dataService
		$scope.tab=11; //change tab to company profile page
	}
	
}]);