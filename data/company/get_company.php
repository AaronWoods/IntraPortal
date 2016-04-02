<?php

include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$user = $data->key;
$json=array();

$sql = "SELECT * FROM companies WHERE cuser ='". $user . "'";

$result = $conn->query($sql);

if ($result->num_rows == 1) {
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