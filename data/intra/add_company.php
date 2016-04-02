<?php

include '/includes/connection.php';

$salt = '$2a$07$usesomadasdsadsadsadasdasdasdsadesillystringfors';

$company=json_decode(file_get_contents('php://input'));

$sql="SELECT cuser FROM companies WHERE cuser='".$company->username."'";

$result = $conn->query($sql);

if ($result->num_rows>0) {
	print "company username already in use";
}
else{
	$digest = crypt($company->password, $salt);

	$sql2 ="INSERT INTO companies (cname, contactname, caddress, cmail, cpass, cwebsite, cuser) VALUES ('".$company->cname."','".$company->contact."','".$company->location."','".$company->mail."','".$digest."','".$company->site."','".$company->username."')";
	
	$result2 = $conn->query($sql2);
	
	print "student added successfully";
}

?>