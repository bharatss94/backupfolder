<?php
session_start();
$type=$_SESSION['usertype'];
$name=$_SESSION['username'];
echo $type."<br/>";
echo $name."<br/>";

?>
