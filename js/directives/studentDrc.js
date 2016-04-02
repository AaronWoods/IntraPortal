'use strict';

//Match directive tags to html snippets to be used for student tabs
app.directive('studentProfile',function(){
	return{
		restrict: 'E',
		templateUrl:'partials//student/studentProfile.html'
	}
});

app.directive('cv',function(){
	return{
		restrict: 'E',
		templateUrl:'partials//student/studentCv.html'
	}
});

app.directive('availableJobs',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/studentJobsAvailable.html'
	}
});

app.directive('closedJobs',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/studentJobsClosed.html'
	}
});

app.directive('testimonials',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/studentTestimonials.html'
	}
});

app.directive('editProfile',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/editProfile.html'
	}
});

app.directive('studentInterviews',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/studentInterviews.html'
	}
});

app.directive('viewJob',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/viewJob.html'
	}
});

app.directive('reviewSubmit',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/reviewSubmit.html'
	}
});

app.directive('viewReview',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/viewReview.html'
	}
});

app.directive('viewClosed',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/student/viewClosedJob.html'
	}
});
