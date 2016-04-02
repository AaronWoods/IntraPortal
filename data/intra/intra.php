<?php 
	$user=json_decode(file_get_contents('php://input'));
	if($user->name=='intra' && $user->pass=='1234'){
		session_start();
		$_SESSION['uid']=uniqid('ang_');
		print $_SESSION['uid'];
	}
	//Need to set unique id for each user within database(example:12407652) 
	//When fetching from the database we need to check username and password
	//then print the name which will be the unique id. 
?>