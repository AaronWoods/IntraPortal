<?php 
	include '/includes/connection.php';
	
	$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "SELECT dcupass FROM students WHERE dcuuser ='". $user->name . "'";

	$result = $conn->query($sql);
	
	$dbpassword="";
	
	
	if ($result->num_rows) {
		$row = mysqli_fetch_assoc($result);
		$dbpassword=$row['dcupass'];
		if (crypt($user->pass, $salt ) == $dbpassword){
			session_start();
			$_SESSION['uid']=uniqid('ang_');
			print $_SESSION['uid'];
		}
			//print_r($json);
	}

$conn->close();
?>