'use strict';

app.factory('dataService', function($http){
	return{
		getdata:function (scope) { //get student user information
			$http.post('data/student/getdata.php',{"key":scope.username})
			.success(function(data){
				scope.data = data;
				console.log("retreived logged in user information");
			});
        },
		update:function(scope){ //update student's user information
			$http.post('data/student/update_profile.php', {name:scope.data.name , address:scope.data.address, email:scope.data.email, dob:scope.data.dob, degree:scope.data.degree, phone:scope.data.phone, profilebio:scope.data.profilebio , projectinterests:scope.data.projectinterests, preferences:scope.data.preferences, dcuuser:scope.data.dcuuser})
			.success(function(data){
				console.log("update profile successfully");
			});
		},
		getJobs:function(scope){ //get jobs which are available
			$http.get('data/student/available_jobs.php')
			.success(function(data){
				scope.availjobs = data;
				console.log("retreived available jobs");
			});
		},
		closedJobs:function(scope){ //get jobs which are closed
			$http.get('data/student/closed_jobs.php')
			.success(function(data){
				scope.closedjobs = data;
				console.log("retreived closed jobs");
			});
		},
		getReviews:function(scope){ //get list of reviews
			$http.get('data/student/get_reviews.php')
			.success(function(data){
				scope.reviews = data;
				console.log("retreived reviews");
			});
		},
		updateReviews:function(submit){ //post review
			$http.post('data/student/post_review.php', submit)
			.success(function(){
				console.log("review posted")
			});
		},
		getInterviews:function(scope){ //get interview requests for student user
			$http.post('data/student/interview_req.php', {"key":scope.username})
			.success(function(data){
				scope.interviews = data;
				console.log("retreived interviews");
			});
			
		},
		confirm:function(scope){ //confirm interview
			$http.post('data/student/confirm_interview.php', scope.confirm)
			.success(function(){
				console.log("interview confirmed");
			});
		},
		apply:function(scope){ //applying for a chosen job
			$http.post('data/student/apply.php', scope.viewjob)
			.success(function(msg){
				if(msg=="Apply"){console.log("applied for job successfully");}
				else{console.log("Job has already been applied to");}
				scope.applymsg=msg;
			});
		},
		viewcprofile:function(scope){ //viewing a company's profile
			$http.post('data/student/company_profile.php', scope.viewjob)
			.success(function(data){
				scope.companydata=data;
				console.log("retrieved company profile");
			});
		}
	};
});