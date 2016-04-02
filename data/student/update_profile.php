<?php 
	include '/includes/connection.php';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "UPDATE students SET name ='". $user->name . "', address='".$user->address."', email='".$user->email."', dob='".$user->dob."', degree='".$user->degree."', phone= '".$user->phone."', profilebio='".$user->profilebio."', preferences='".$user->preferences."', projectinterests='".$user->projectinterests."' WHERE dcuuser='".$user->dcuuser."'";
	
	$result = $conn->query($sql);
?>