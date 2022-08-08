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
if(isset($_POST['save']))
{	
	 $gallons_req = $_POST['gRequested'];
	 $delivery_date = $_POST['dDate'];
	
	 $sql_query = "INSERT INTO fuel_quote (gallons_req, delivery_date)
	 VALUES ('$gallons_req','$delivery_date')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		header("location: http://20.55.70.6:8080/website/FuelQuoteForm/connect-quote.php");

	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>
