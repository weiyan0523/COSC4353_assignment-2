<?php

ini_set("display_errors", "1");
error_reporting(E_ALL);

//print_r($_POST);
$Username = $_POST['username'];
$Password = $_POST['password'];

//connect to db
$host = "20.55.70.6/phpmyadmin";
$dbname = "newUser_db";
$username = "root";
$password = "admin12345";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into registration(username, passowrd(?, ?)");
    $stmt->bind_param("ss",$Username, $Password);
    $stmt->execute();
    echo "registration successfully";
    $stmt ->close();
    $conn->close();
}

?>