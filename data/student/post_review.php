<?php 
	include '/includes/connection.php';
	
	$user=json_decode(file_get_contents('php://input'));
	
	$sql = "INSERT INTO reviews (cname, author, review, date) VALUES('".$user->cname."','".$user->author."','".$user->body."','".$user->date."')";

	$result = $conn->query($sql);

?>