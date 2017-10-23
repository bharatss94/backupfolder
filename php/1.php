<?php 
$a=50;
$b=20;
/*echo $a;
echo $b;
*/
session_start();
$_SESSION["firstname"] = "bharat";
$_SESSION["lastname"] = "shirahatti";
$login=$_SESSION["firstname"];

echo $login."<br/>";
//$time=date("h:i:sa");
$time= localtime();
//echo $time;
print_r($time);
echo "session started and session variables have been set<br/>";
//session_unset();
//session_destroy();

?>
