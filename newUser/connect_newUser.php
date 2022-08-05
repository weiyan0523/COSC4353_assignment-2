<?php

//print_r($_POST);
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');

//connect to db
$host = "localhost";
$dbname = "web_app";
$username = "root";
$password = "admin12345";

$conn = new mysqli($host, $username, $password, $dbname);

if (mysqli_connect_error()) {
    die('Connection error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
}
else{
    $sql = "INSERT INTO registration(username, password)
    values ('$username', '$password')";
    if($conn->query($sql)){
        echo "New record is inserted sucessfully";
    }
    else{
        echo "Error: ". $sql ."<br>". $conn->error;
    }
    $conn->close();
}

?>