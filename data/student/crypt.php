<?php 
	include '/includes/connection.php';
	
	$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "SELECT cpass FROM companies WHERE cuser='micros21'";
	
	$result = $conn->query($sql);
	
	$pass ="";
	
	if ($result->num_rows){
		$row = mysqli_fetch_assoc($result);
		$pass=$row['cpass']; //password from database
	}
	
	$digest = crypt($pass, $salt);
	
	$sql2 ="UPDATE companies SET cpass='".$digest."' WHERE cuser='micros21'";
	
	$result2 = $conn->query($sql2);
	
	$user_input = "t3d7nmbe";
	
	if (crypt($user_input, $salt) == $pass){ print "sick match m8"; }
	else print "get rekt m8";
?>