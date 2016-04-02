'use strict';

//Match directive tag to html snippet to allow the log in screen to appear
app.directive('loginDirective',function(){
	return{
		restrict: 'E',
		templateUrl:'partials/tpl/loginPage.html'
	}
});