<?php

include '/includes/connection.php';
	
$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';

$user=json_decode(file_get_contents('php://input'));
$changedpass=$user->cpass;

$sql ="SELECT cpass FROM companies WHERE cuser='".$user->cuser."'";

$result = $conn->query($sql);

$digest = crypt($changedpass, $salt);

$row = mysqli_fetch_assoc($result);

If($changedpass==$row['cpass']){
	$sql2 = "UPDATE companies SET cname ='". $user->cname . "', caddress='".$user->caddress."', cmail='".$user->cmail."', cdesc='".$user->cdesc."',  cphone= '".$user->cphone."', contactname='".$user->contactname."', contactposition='".$user->contactposition."', cwebsite='".$user->cwebsite."' WHERE cuser='".$user->cuser."'";
	
	$result2 = $conn->query($sql2);
	print "password not changed";
}
else{
	$sql3 = "UPDATE companies SET cname ='". $user->cname . "', cpass='".$digest."', caddress='".$user->caddress."', cmail='".$user->cmail."', cdesc='".$user->cdesc."',  cphone= '".$user->cphone."', contactname='".$user->contactname."', contactposition='".$user->contactposition."', cwebsite='".$user->cwebsite."' WHERE cuser='".$user->cuser."'";
	
	$result3 = $conn->query($sql3);
	print "password changed";
}

?>