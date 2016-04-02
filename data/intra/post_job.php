<?php

include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));
//--> get username below 
$sql = "SELECT cuser FROM companies WHERE cname='".$data->name."'";

$username="";
$success="";

$result = $conn->query($sql);

if($result->num_rows){
	$row = mysqli_fetch_assoc($result);
	$username=$row['cuser'];
	$sql2 = "INSERT INTO jobs (username, cname, position, jobdesc, location, date, requirements, languages, available) VALUES('".$username."','".$data->name."','".$data->position."','".$data->description."','".$data->location."','".$data->expiry."','".$data->requirements."','".$data->languages."','yes')";
	$result2 = $conn->query($sql2);
	$success="yes";
}
else{
	$success="no";
}

print $success;

$conn->close();

?>