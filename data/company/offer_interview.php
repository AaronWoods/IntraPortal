<?php 
	include '/includes/connection.php';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "UPDATE appliedjobs SET interview ='yes' WHERE dcuuser='".$user->dcuuser."'&& cname='".$user->cname."'&& position='".$user->position."'";
	
	$result = $conn->query($sql);
?>