<?php
//db info
$host = "localhost";
$dbname = "login_db";
$username = "root";
$password = "admin12345";
//connect to db
$mysqli = new mysqli($host,$username,$password,$dbname);
                     
if ($mysqli->connect_errno) {
    die("!!!!Connection error: " . $mysqli->connect_error);
}

return $mysqli;