<?php
include '/includes/connection.php';

$json =array();
$sql = "SELECT * FROM jobs WHERE available='no'";
$count=0;
$result = $conn->query($sql);

if ($result->num_rows) {
	
    while($row = mysqli_fetch_assoc($result)){
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['date'] = $row['date'];
		$json[$count]['position'] = $row['position'];
		$json[$count]['username'] = $row['username'];
		$json[$count]['jobdesc'] = $row['jobdesc'];
		$json[$count]['requirements'] = $row['requirements'];
		$json[$count]['languages'] = $row['languages'];
		$json[$count]['available'] = $row['available'];
		$count = $count+1;
	}
}

echo json_encode($json);

$conn->close();

?>