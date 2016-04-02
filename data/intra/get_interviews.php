<?php

include '/includes/connection.php';

$json =array();

$sql = "SELECT dcuuser, cuser, cname, position FROM appliedjobs WHERE interview='yes'";

$result = $conn->query($sql);

$count=0;
$cname="";
$cposition="";
$row;
$row2;
$row3;

if ($result->num_rows) {	
	while($row = mysqli_fetch_assoc($result)){
		$cname=$row['cname'];
		$cposition=$row['position'];
		$sql2= "SELECT location FROM jobs WHERE cname='".$cname."' && position='".$cposition."'"; 
		$result2 = $conn->query($sql2);
		if($result2->num_rows){
			$row2 = mysqli_fetch_assoc($result2);
			$sql3="SELECT contactname,cphone,cmail FROM companies WHERE cname='".$cname."'";
			$result3 = $conn->query($sql3);
			if($result3->num_rows){
				$row3 = mysqli_fetch_assoc($result3);
				$json[$count]['dcuuser'] = $row['dcuuser'];
				$json[$count]['cuser'] = $row['cuser'];
				$json[$count]['cname'] = $row['cname'];
				$json[$count]['position'] = $row['position'];
				$json[$count]['location'] = $row2['location'];
				$json[$count]['contactname'] = $row3['contactname'];
				$json[$count]['cphone'] = $row3['cphone'];
				$json[$count]['cmail'] = $row3['cmail'];
				$count = $count+1;
			}
		}
	}
}

echo json_encode($json);

$conn->close();


?>