<?php 
	include '/includes/connection.php';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "UPDATE jobs SET location ='". $user->location . "', requirements='".$user->requirements."', languages='".$user->languages."', date='".$user->date."',  jobdesc= '".$user->jobdesc."' WHERE cname='".$user->cname."'&& position='".$user->position."'";
	
	$result = $conn->query($sql);
?>