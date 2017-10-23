<!DOCTYPE HTML>
<html>
<head>
<title> example for form and validation </title>
</head>
<body>
<h1> user does not exists <h1>
<h1> create the account</h1>
<form method="post" >
<label>FirstName</label><input type="text" name="fname" /><br/><br/>
<label>LastName</label><input type="text" name="lname" /><br/><br/>
<label>UserName</label><input type="text" name="username" /><br/><br/>

<label>password</label><input type="text" name="password" /><br/><br/>
<label>email</label><input type="text" name="email" /><br/><br/>

<input type="submit" name="submit"/>


</form>
<?php
if (isset($_POST['submit']))
{
include("database.php");


session_start();
$firstname=$_POST['fname'];
$lastname=$_POST['lname'];
$username=$_POST['username'];

$password=$_POST['password'];
$email=$_POST['email'];

$sql = "INSERT INTO registration (firstname, lastname,username,password, email)
VALUES ('$firstname', '$lastname','$username','$password', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";

// echo "<script language='javascript' type='text/javascript'> alert("created");</script>";
header('location:login.php');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
?>
</body>
</html>


