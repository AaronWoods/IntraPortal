<?php
include '/includes/connection.php';

$json =array();
$sql = "SELECT * FROM reviews";
$count=0;
$result = $conn->query($sql);

if ($result->num_rows) {
	
    while($row = mysqli_fetch_assoc($result)){
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['author'] = $row['author'];
		$json[$count]['date'] = $row['date'];
		$json[$count]['review'] = $row['review'];
	
		$count = $count+1;
	}
}

echo json_encode($json);

$conn->close();

?>