'use strict';

app.factory('sessionService', ['$http', function($http){
	return{
		set:function(key, value){ //sets user id(unique) as session storage
			return sessionStorage.setItem(key,value);
		},
		get:function(key){ //get sessionstorage value(username id)
			return sessionStorage.getItem(key);
		},
		destroy:function(key){  //destroy session, logging out
			$http.post('data/destroy_session.php');
			return sessionStorage.removeItem(key);
		}
	};
}]);