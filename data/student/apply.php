<?php 
	include '/includes/connection.php';
	
	$cuser="cuser";
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "SELECT * FROM appliedjobs WHERE dcuuser='".$user->username."'&& cname='".$user->cname."'&& position='".$user->position."'";
	
	$result = $conn->query($sql);
	
	if ($result->num_rows) { print "applied already"; }
	else { 
	
		$sql2 = "SELECT cuser FROM companies WHERE cname='".$user->cname."'";
	
		$result2 = $conn->query($sql2);
	
		if($result2->num_rows){
			$row = mysqli_fetch_assoc($result2);
			$cuser=$row['cuser'];	
			$sql3 = "INSERT INTO appliedjobs (dcuuser,cuser,cname,position) VALUES ('".$user->username."','".$cuser."','".$user->cname."','".$user->position."')";
			$result3 = $conn->query($sql3);
		}

		print "Apply";
	}
?>