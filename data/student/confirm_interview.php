<?php
include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$sql = "UPDATE appliedjobs SET confirm ='yes' WHERE dcuuser='".$data->dcuuser."'&& cname='".$data->cname."' && position='".$data->position."'";
	
$result = $conn->query($sql);


?>