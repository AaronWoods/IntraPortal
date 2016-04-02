<?php
include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$user = $data->key;

$count=0;

$json=array();

$sql = "SELECT * FROM appliedjobs WHERE dcuuser ='". $user . "' && interview ='yes'";

$result = $conn->query($sql);

if ($result->num_rows) {
    while($row = mysqli_fetch_assoc($result)){
		//array_push($json, $row['name'] );
		//array_push($json, $row['dcupass'] );
		$json[$count]['dcuuser'] = $row['dcuuser'];
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['position'] = $row['position'];
		$json[$count]['interview'] = $row['interview'];
		$json[$count]['confirm'] = $row['confirm'];
		$json[$count]['joboffer'] = $row['joboffer'];
		$count=$count+1;
	}
}

echo json_encode($json);

$conn->close();


?>