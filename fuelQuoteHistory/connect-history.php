<?php
$server_name="localhost";
$username="root";
$password="admin12345";
$database_name="login_db";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection

if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());

}
