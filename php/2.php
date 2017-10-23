<?php
include '1.php';
$sum= $a+$b;
//echo $sum;


session_start();

echo "session firstname is ".$_SESSION["firstname"]."<br/>";
echo "session lastname is ".$_SESSION["lastname"]."<br/>";

echo "session last name is changing<br/>";
$_SESSION["lastname"]="Infanion";
echo "session lasttname is ".$_SESSION["lastname"]."<br/>";
session_unset();
session_destroy();

?>
