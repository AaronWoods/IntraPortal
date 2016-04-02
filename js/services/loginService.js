'use strict';

app.factory('loginService',function($http,$location,sessionService){
	return{
		login:function(data,scope){
			//first check student login
			var $success=0;
			var $promise = $http.post('data/student/user.php',data);
			
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){ //if username given eg ang_123456
					console.log('student has succesfully logged in');
					sessionService.set('user',data.name); //set session storage values
					$location.path('/studentHome');
					$success=1;
				}
				else{
					console.log('student failed to log in');
				}
			});
			//second check intra login
			if($success!=1){
				$promise =$http.post('data/intra/intra.php',data);
				
				$promise.then(function(msg){
					var uid=msg.data;
					if(uid){ //if username given eg ang_123456
						console.log('intra has succesfully logged in');
						sessionService.set('user',data.name); //set session storage values
						$location.path('/intraHome');
						$success=1;
					}
					else{
						console.log('intra failed to log in');
					}
				});
			}
			//lastly check company login
			if($success!=1){
				$promise =$http.post('data/company/company.php',data);
				
				$promise.then(function(msg){
					var uid=msg.data;
					if(uid){ //if username given eg ang_123456
						console.log('company has succesfully logged in');
						sessionService.set('user',data.name); //set session storage values
						$location.path('/companyHome');
						$success=1;
					}
					else{
						console.log('company failed to log in');
					}
				});
			}
			if($success==0){
				scope.loginmsg="Incorrect";
			}
		},
		logout:function(){ //destroy session storage and logout
			sessionService.destroy('user');
			$location.path('/login');
		},
		islogged:function(){ //checks if student has started a session
			var $checkSessionServer=$http.post('data/check_session.php');
			return $checkSessionServer;
		},
		crypt:function(){ //testing crypt method within database
			$http.get('data/student/crypt.php')
			.success(function(data){
				console.log("data returned: "+ data);
			});
		}
	}
});