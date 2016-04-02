'use strict'

app.factory('companyService', function($http){
	return{
		getCompany:function(scope){ //get company user information using username
			$http.post('data/company/get_company.php',{"key":scope.username})
			.success(function(data){
				console.log("retreived company information");
				scope.companydata=data;
			});
		},
		postJob:function(job){ //posting a job to the jobs list
			console.log("Inside post job now");
			$http.post('data/company/post_job.php',job)
			.success(function(){
				console.log("job was successfully posted");
			});
		},
		jobsPosted:function(scope){ //fetch jobs posted by company user
			$http.post('data/company/get_posted_jobs.php',{"key":scope.username})
			.success(function(data){
				console.log("posted job successfully");
				scope.postedjobs = data;
			});
		},
		updateProfile:function(scope){ //update company profile
			$http.post('data/company/update_company_profile.php', {cuser:scope.username, cname:scope.companydata.cname , caddress:scope.companydata.caddress, cmail:scope.companydata.cmail, cdesc:scope.companydata.cdesc,  cphone:scope.companydata.cphone, contactname:scope.companydata.contactname , contactposition:scope.companydata.contactposition, cwebsite:scope.companydata.cwebsite})
			.success(function(){
				console.log("update profile successfully");
			});
		},
		updateJob:function(scope){ //update current jobs
			$http.post('data/company/update_job.php', scope.jobedit)
			.success(function(){
				console.log("update job successfully");
			});
		},
		getCandidates:function(scope){ //get student candidates who have applied for company's posted jobs
			$http.post('data/company/get_candidates.php', {"key":scope.username})
			.success(function(data){
				console.log("update job successfully");
				scope.candidates=data;
			});
		},
		studentProfile:function(info,scope){ //fetch a student's information to view in profile
			$http.post('data/student/getdata.php', {"key":info.dcuuser})
			.success(function(data){
				console.log("fetched student successfully");
				scope.data=data;
			});
		},
		offerinterview:function(student){ //offering a student an interview
			$http.post('data/company/offer_interview.php', student)
			.success(function(){
				console.log("Offered student interview");
			});
		},
		attend:function(student, attend){ //notifying intra that student has attended interview
			$http.post('data/company/attended.php', {"student":student, "attend":attend})
			.success(function(data){
				console.log("updated student attendence");
			});
		},
		joboffered:function(cand){ //offering a job to a student
			$http.post('data/company/job_offered.php', cand)
			.success(function(){
				console.log("job offered successfully");
			});
		}	
	};
});