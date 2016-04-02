<?php 
include '/includes/connection.php';

$user=json_decode(file_get_contents('php://input'));

$count=0;

$sql ="SELECT * FROM appliedjobs WHERE cuser='".$user->key."'";

$result = $conn->query($sql);

if ($result->num_rows) {
	while($row = mysqli_fetch_assoc($result)){
		$json[$count]['dcuuser'] = $row['dcuuser'];
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['position'] = $row['position'];
		$json[$count]['interview'] = $row['interview'];
		$json[$count]['confirm'] = $row['confirm'];
		$json[$count]['attendedinterview'] = $row['attendedinterview'];
		$json[$count]['joboffer'] = $row['joboffer'];
		
		$count = $count+1;
	}
	echo json_encode($json);
}

$conn->close();
?>