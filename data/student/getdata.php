<?php

include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$user = $data->key;

$json=array();

$sql = "SELECT * FROM students WHERE dcuuser ='". $user . "'";

$result = $conn->query($sql);

if ($result->num_rows == 1) {
    while($row = mysqli_fetch_assoc($result)){
		$json['name'] = $row['name'];
		$json['address'] = $row['address'];
		$json['dob'] = $row['dob'];
		$json['email'] = $row['email'];
		$json['phone'] = $row['phone'];
		$json['studentnum'] = $row['studentnum'];
		$json['dcuuser'] = $row['dcuuser'];
		$json['dcupass'] =$row['dcupass'];
		$json['degree'] = $row['degree'];
		$json['profilepic'] = $row['profilepic'];
		$json['profilebio'] = $row['profilebio'];
		$json['projectinterests'] = $row['projectinterests'];
		$json['preferences'] = $row['preferences'];
		$json['cv'] = $row['cv'];
		$json['lcresults'] = $row['lcresults'];
		$json['jobs'] = $row['jobs'];
		$json['hired'] = $row['hired'];
		$json['cname'] = $row['cname'];
		$json['position'] = $row['position'];

		//print_r($json);
	}
}

echo json_encode($json);

$conn->close();

?>