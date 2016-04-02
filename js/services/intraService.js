'use strict'

app.factory('intraService', function($http){
	return{
		getStudents:function(scope){ //Get students information
			$http.get('data/intra/get_students.php')
			.success(function(data){
				console.log("attempting to gather students");
				scope.students=data;
				
			});
		},
		getCompanies:function(scope){ //get companies information
			$http.get('data/intra/get_companies.php')
			.success(function(data){
				console.log("attempting to gather companies");
				scope.companies=data;
				
			});
		},
		postjob:function(company,scope){ //Processes posting a job
			$http.post('data/intra/post_job.php',company)
			.success(function(data){
				if(data=="yes"){ //success
					console.log("Job posted successfully");
					scope.successfullyposted="Job posted successfully";
				}
				else{ //failure(invalid company primary key)
					  console.log("Job not posted(incorrect company name)");
					  scope.successfullyposted="Incorrect Company name"; 	
				}
			});
		},
		addStudent:function(student){ //add student to students table
			$http.post('data/intra/add_student.php', student)
			.success(function(msg){
				console.log(msg);
			});
		},
		addCompany:function(company){ //add company to company table
			$http.post('data/intra/add_company.php',company)
			.success(function(){
				console.log("Added company");
			});
		},
		getInterviews:function(scope){ //fetch interviews
			$http.get('data/intra/get_interviews.php')
			.success(function(data){
				console.log("retrieving interviews");
				scope.interviews=data;
			});
		},
		modStudent:function(scope){ //update student
			$http.post('data/intra/mod_student.php',scope.data)
			.success(function(){
				console.log("attempting to mod Student");
			});
		},
		modCompany:function(scope){ //update company
			$http.post('data/intra/mod_company.php',scope.companydata)
			.success(function(data){
				console.log("attempting to mod Company + data: " + data);
			});
		}
	};
});