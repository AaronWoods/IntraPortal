<?php

include '/includes/connection.php';

$data=json_decode(file_get_contents('php://input'));

$sql = "INSERT INTO jobs (username, cname, position, jobdesc, location, date, requirements, languages, available) VALUES('".$data->username."','".$data->name."','".$data->position."','".$data->description."','".$data->location."','".$data->expiry."','".$data->requirements."','".$data->languages."','".$data->available."')";

$result = $conn->query($sql);

$conn->close();

?>