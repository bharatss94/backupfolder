<!DOCTYPE HTML>
<html>
<head>
<title> example for form and validation </title>
</head>
<body>
<h1> enter the form for validation</h1>
<form  method="post" style="align:center;">
<label>Username</label><input type="text" name="username" /><br/><br/>

<label>Password</label><input type="password" name="password" /><br/><br/>

<input type="submit" name="submit"/>



<?php

if (isset($_POST['submit']))
{	  
include("database.php");
session_start();
$username=$_POST['username'];

$password=$_POST['password'];
$_SESSION['login_user']=$username;
$sql = "SELECT username, password from registration where username='$username' and password='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
header('location:home.php');
}
else {
echo " working"; 
//   echo "<script language='javascript' type='text/javascript'> location.href='home.php' </script>";
header('location:registration.php');

}
}
else{
echo "not clicked submit";
}
//echo "<script language='javascript' type='text/javascript'> location.href='database.php' </script>";	
?>
</form>
</body>
</html>
