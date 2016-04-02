<?php

include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$cuser="cuser";

$sql2 = "SELECT cuser FROM companies WHERE cname='".$data->cname."'";
	
$result2 = $conn->query($sql2);
	
if($result2->num_rows){
	$row = mysqli_fetch_assoc($result2);
	$cuser=$row['cuser'];	
}

$json=array();

$sql = "SELECT * FROM companies WHERE cuser ='". $cuser . "'";

$result = $conn->query($sql);

if ($result->num_rows) {
    while($row = mysqli_fetch_assoc($result)){
		$json['cname'] = $row['cname'];
		$json['caddress'] = $row['caddress'];
		$json['cdesc'] = $row['cdesc'];
		$json['cmail'] = $row['cmail'];
		$json['cphone'] = $row['cphone'];
		$json['contactname'] = $row['contactname'];
		$json['contactposition'] = $row['contactposition'];
		$json['cwebsite'] = $row['cwebsite'];
	}
}

echo json_encode($json);

$conn->close();

?>