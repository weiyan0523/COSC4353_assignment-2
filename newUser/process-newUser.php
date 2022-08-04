<?php

print_r($_POST);


//connect to db
$host = "20.55.70.6/phpmyadmin";
$dbname = "username_db";
$username = "root";
$password = "admin12345";

mysqli_connect($host,$username,$password,$dbname);