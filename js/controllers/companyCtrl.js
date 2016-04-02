'use strict';

//Company Controller
app.controller('companyCtrl',['$scope','loginService','sessionService','companyService', function($scope,loginService,sessionService,companyService){
	$scope.txt='Welcome to the Dcu Intra Portal(COMPANY)'; //testing scope text for routing
	$scope.companydata={}; //company user information
	$scope.postedjobs={}; //list of all posted jobs
	$scope.jobedit={}; //handles editing of posted jobs
	$scope.candidates={}; //list of all candidates
	$scope.data={}; //List of individual student information for profile viewing
	$scope.tab=1; //initial profile tab
	
	$scope.logout=function(){ //logs out of Company System
		loginService.logout(); 
	}
	
	$scope.checkTab=function(tab){ //checks tab to make tab class active (tab visuals)
		return this.tab==tab;
	}
	
	$scope.$on('$routeChangeSuccess', function () { //on load procedures
		$scope.username = sessionService.get('user'); //holds username of user from session storage
		companyService.getCompany($scope); //get company user information
		companyService.jobsPosted($scope); //get list of posted jobs by company user
		companyService.getCandidates($scope); //get list of student candidates
	});
	
	$scope.postjob=function(job){ //post job
		job.username=$scope.username; //add information to job form variable
		job.available="yes"; //add information to job form variable
		companyService.postJob(job); //post job to be added to the database
		$scope.tab=1; //return to profile once complete
	}
	
	$scope.updateProfile=function(){ //update company information
		companyService.updateProfile($scope); //updates companydata variable to be updated on database
	}
	
	$scope.editJob=function(job){ //Sets up edit variable for editing posted job
		$scope.jobedit=job; //initialize input to scope variable
		$scope.tab=7;
	}
	
	$scope.updateJob=function(){ //procede with posted job update
		companyService.updateJob($scope); //proccesses job updte to the companyService to be added to the database
		$scope.tab=4;
	}
	
	$scope.viewStudent=function(info){ //view chosen students profile
		companyService.studentProfile(info,$scope); //proccess view student task to companyService
		$scope.tab=8; //change tab to student profile tab
	}
	
	$scope.offerinterview=function(student){ //offer interview to student
		companyService.offerinterview(student); //proccess interview offer to companyService to update database
	}
	
	$scope.attended=function(student, attend){ //has student attended interview or not
		companyService.attend(student, attend); //Processes attendance update to companyService
	}
	
	$scope.jobOfferConfirm=function(cand){ // offering a student a job
		if (confirm('Confirm job offer: '+ cand.dcuuser + ' -> ' + cand.position)) { //re-checks if company hasn't misclicked the hire button
			companyService.joboffered(cand); //processes job offer to companyService to add to the database
		} 
		else {
			// Company didn't mean to offer job
		}
	}

}]);