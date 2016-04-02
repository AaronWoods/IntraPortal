<?php

include '/includes/connection.php';

$json =array();
$sql = "SELECT * FROM companies";
$count=0;
$result = $conn->query($sql);

if ($result->num_rows) {
	
    while($row = mysqli_fetch_assoc($result)){
		$json[$count]['cname'] = $row['cname'];
		$json[$count]['cuser'] = $row['cuser'];
		$json[$count]['cpass'] = $row['cpass'];
		$json[$count]['caddress'] = $row['caddress'];
		$json[$count]['cdesc'] = $row['cdesc'];
		$json[$count]['cmail'] = $row['cmail'];
		$json[$count]['cphone'] = $row['cphone'];
		$json[$count]['contactname'] = $row['contactname'];
		$json[$count]['contactposition'] = $row['contactposition'];
		$json[$count]['cwebsite'] = $row['cwebsite'];
		$count = $count+1;
	}
}

echo json_encode($json);

$conn->close();


?>