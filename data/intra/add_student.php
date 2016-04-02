<?php

include '/includes/connection.php';

$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';

$student=json_decode(file_get_contents('php://input'));

$sql="SELECT dcuuser FROM students WHERE dcuuser='".$student->username."'";

$result = $conn->query($sql);

if ($result->num_rows>0) {
	print "student username already in use";
}
else{
	$digest = crypt($student->password, $salt);

	$sql2 ="INSERT INTO students (address, degree, dob, studentnum, email, name, dcupass, phone, dcuuser) VALUES ('".$student->address."','".$student->degree."','".$student->dob."','".$student->id."','".$student->mail."','".$student->name."','".$digest."','".$student->phone."','".$student->username."')";
	
	$result2 = $conn->query($sql2);
	
	print "student added successfully";
	
}

$conn->close();

?>