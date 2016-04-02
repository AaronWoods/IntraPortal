'use strict';

//Match directive tags to html snippets to be used for company tabs
app.directive('companyProfile',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/companyProfile.html'
	}
});

app.directive('contact',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/companyContact.html'
	}
});

app.directive('postJobs',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/companyPostJobs.html'
	}
});

app.directive('jobsPosted',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/companyJobsPosted.html'
	}
});

app.directive('candidates',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/companyCandidates.html'
	}
});

app.directive('companyEdit',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/companyEdit.html'
	}
});

app.directive('editJob',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/company/editJob.html'
	}
});
