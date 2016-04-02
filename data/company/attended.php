<?php 
	include '/includes/connection.php';

	$user=json_decode(file_get_contents('php://input'));
	

	$sql = "UPDATE appliedjobs SET attendedinterview = '".$user->attend."' WHERE cname='".$user->student->cname."' && position='".$user->student->position."' && dcuuser = '".$user->student->dcuuser."'";
	
	$result = $conn->query($sql);
?>