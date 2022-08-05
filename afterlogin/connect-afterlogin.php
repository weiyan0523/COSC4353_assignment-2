<?php
$server_name="localhost";
$username="root";
$password="admin12345";
$database_name="reg";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection
if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());

}

if(isset($_POST['save']))
{	
	 $firstName = $_POST['firstName'];
	 $lastName = $_POST['lastName'];
	 $address = $_POST['address'];
     $city = $_POST['city'];
     $state = $_POST['state'];
     $zipcode = $_POST['zipcode'];


	 $sql_query = "INSERT INTO clientinfo (firstName, lastName, address, city, state, zipcode)
	 VALUES ('$firstName','$lastName','$address', '$city', '$state', '$zipcode')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		header("location: http://20.55.70.6:8080/website/afterlogin/afterlogin.html");

	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>
