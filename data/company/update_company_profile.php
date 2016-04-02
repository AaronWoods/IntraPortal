<?php 
	include '/includes/connection.php';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "UPDATE companies SET cname ='". $user->cname . "', caddress='".$user->caddress."', cmail='".$user->cmail."', cdesc='".$user->cdesc."',  cphone= '".$user->cphone."', contactname='".$user->contactname."', contactposition='".$user->contactposition."', cwebsite='".$user->cwebsite."' WHERE cuser='".$user->cuser."'";
	
	$result = $conn->query($sql);

?>