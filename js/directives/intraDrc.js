'use strict';

//Match directive tags to html snippets to be used for intra tabs
app.directive('intraHomepage',function(){ 
	return{
		restrict: 'E',
		templateUrl:'partials/intra/intraHomepage.html'
	}
});

app.directive('intraServices',function(){ 
	return{
		restrict: 'E',
		templateUrl:'partials/intra/intraServices.html'
	}
});

app.directive('addStudent',function(){ 
	return{
		restrict: 'E',
		templateUrl:'partials/intra/addStudent.html'
	}
});

app.directive('addCompany',function(){ 
	return{
		restrict: 'E',
		templateUrl:'partials/intra/addCompany.html'
	}
});

app.directive('modifyCompany',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/modifyCompany.html'
	}
});

app.directive('modifyStudent',function(){ 
	return{
		restrict: 'E',
		templateUrl:'partials/intra/modifyStudent.html'
	}
});

app.directive('studentData',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/studentData.html'
	}
});

app.directive('companyData',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/companyData.html'
	}
});

app.directive('viewStudents',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/viewStudents.html'
	}
});

app.directive('viewCompanies',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/viewCompanies.html'
	}
});

app.directive('viewStudent',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/viewStudent.html'
	}
});

app.directive('viewCompany',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/intra/viewCompany.html'
	}
});
