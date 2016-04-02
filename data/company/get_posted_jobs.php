<?php
include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$user=$data->key;

$json = array();

$sql = "SELECT * FROM jobs WHERE available='yes' && username='".$user."'";

$result = $conn->query($sql);

$count=0;

if ($result->num_rows) {
    while($row = mysqli_fetch_assoc($result)){
		$json[$count]['username'] = $row['username'];
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['position'] = $row['position'];
		$json[$count]['jobdesc'] = $row['jobdesc'];
		$json[$count]['location'] = $row['location'];
		$json[$count]['date'] = $row['date'];
		$json[$count]['requirements'] = $row['requirements'];
		$json[$count]['languages'] = $row['languages'];
		$json[$count]['available'] = $row['available'];
		$count = $count+1;
	}
}

echo json_encode($json);

$conn->close();

?>