<?php

include '/includes/connection.php';
	
$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';

$user=json_decode(file_get_contents('php://input'));
$changedpass=$user->dcupass;

$sql ="SELECT dcupass FROM students WHERE dcuuser='".$user->dcuuser."'";

$result = $conn->query($sql);

$digest = crypt($changedpass, $salt);

$row = mysqli_fetch_assoc($result);

If($changedpass==$row['dcupass']){
	$sql2 = "UPDATE students SET name ='". $user->name . "', address='".$user->address."', email='".$user->email."', dob='".$user->dob."', degree='".$user->degree."', phone= '".$user->phone."', profilebio='".$user->profilebio."', preferences='".$user->preferences."', projectinterests='".$user->projectinterests."' WHERE dcuuser='".$user->dcuuser."'";

	$result2 = $conn->query($sql2);
}
else{
	$sql3 = "UPDATE students SET name ='". $user->name . "', dcupass='".$digest."', address='".$user->address."', email='".$user->email."', dob='".$user->dob."', degree='".$user->degree."', phone= '".$user->phone."', profilebio='".$user->profilebio."', preferences='".$user->preferences."', projectinterests='".$user->projectinterests."' WHERE dcuuser='".$user->dcuuser."'";

	$result3 = $conn->query($sql3);
}

?>