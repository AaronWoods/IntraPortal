<?php

include '/includes/connection.php';

$json =array();

$sql = "SELECT * FROM students";

$result = $conn->query($sql);

$count=0;

if ($result->num_rows) {
	
    while($row = mysqli_fetch_assoc($result)){

		$json[$count]['name'] = $row['name'];
		$json[$count]['address'] = $row['address'];
		$json[$count]['dob'] = $row['dob'];
		$json[$count]['email'] = $row['email'];
		$json[$count]['phone'] = $row['phone'];
		$json[$count]['studentnum'] = $row['studentnum'];
		$json[$count]['dcuuser'] = $row['dcuuser'];
		$json[$count]['dcupass'] =$row['dcupass'];
		$json[$count]['degree'] = $row['degree'];
		$json[$count]['profilepic'] = $row['profilepic'];
		$json[$count]['profilebio'] = $row['profilebio'];
		$json[$count]['projectinterests'] = $row['projectinterests'];
		$json[$count]['preferences'] = $row['preferences'];
		$json[$count]['cv'] = $row['cv'];
		$json[$count]['lcresults'] = $row['lcresults'];
		$json[$count]['jobs'] = $row['jobs'];
		$json[$count]['hired'] = $row['hired'];
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['position'] = $row['position'];
		$count = $count+1;
	}
}

echo json_encode($json);

$conn->close();


?>