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
	 $user_name = $_POST['user_name'];
	 $pass_word = $_POST['pass_word'];
	
	 $sql_query = "INSERT INTO info (user_name, pass_word)
	 VALUES ('$user_name','$pass_word')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		echo "New Details Entry inserted successfully !";
	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>
