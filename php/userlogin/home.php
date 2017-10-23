<!DOCTYPE HTML>
<html>
<head>
<title> home page </title>
</head>
<body>
<h1> hi</h1>
<h1> welcome to infanion</h1>

<?php 

session_start();
/*if(empty($_SESSION['login_user']))
{
header('location:login.php');
}
*/

$login_session=$_SESSION['login_user'];

echo $login_session;


 ?>

<a href="account.php">my account </a>
<a href="logout.php"> Logout </a>

</body>
</html>

