<?php 
	include '/includes/connection.php';

	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "UPDATE appliedjobs SET joboffer= 'yes' WHERE cname='".$user->cname."' && position='".$user->position."' && dcuuser = '".$user->dcuuser."'";
	
	$result = $conn->query($sql);
	
	$sql2 = "UPDATE students SET hired= 'yes', cname='".$user->cname."', position='".$user->position."' WHERE dcuuser = '".$user->dcuuser."'";
	
	$result2 = $conn->query($sql2);
	
	$sql3 = "UPDATE jobs SET available= 'no' WHERE cname='".$user->cname."' && position='".$user->position."'";
	
	$result3 = $conn->query($sql3);
?>