<!DOCTYPE html>

<?php
$cookie_name = "infanion";
$cookie_value = "Bharat Shirahatti";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>

<?php


session_start();
if(empty($_SESSION["lastname"])==true)
{ echo "session not started<br/>";
}
else{
echo "Session lastname is  ".$_SESSION["lastname"]."<br/>";
}
?>



<html>
<body>

<?php
define("GREETING", "Welcome to Infanion");

function myTest() {
echo GREETING;

}
function writeMsg() {
echo "Hello world! <br/>";
}

writeMsg(); 
myTest();
$persons = array("bharat", "samba", "siddhu");
echo "<br/>HI  " . $persons[0] . ", " . $persons[1] . " and " . $persons[2] . ".";
/*echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];*/
echo "<br/>";

echo count($persons);
echo "<br/>";
echo sizeof($persons);
echo "<br/>";
var_dump(GREETING);
$persons1 = array("21"=>"bharat","31"=> "samba","41"=> "siddhu");
foreach ($persons1 as $x=>$y)
{echo "<br/>Key=" . $x . ", Value=" . $y;
}

sort($persons);
echo "<br/> ascending order <br/>";
$len = count($persons);
for($x = 0; $x < $len; $x++) {
	 echo $persons[$x];
    echo "<br>";
}
rsort($persons);
echo "<br/> descending order <br/>";
$len = count($persons);
for($x = 0; $x < $len; $x++) {
         echo $persons[$x];
    echo "<br>";
}
krsort($persons1);
echo "<br/> descending order based on keys <br/>";
foreach($persons1 as $key => $value)
   echo 'key with '.$key.' value ' .$value.'<br>';
?>
<?php
//include '2.php';
//echo "i have ".($a+$b). " rupees";
//require '2.php';
include_once('2.php');

//require '2.php';
echo "<br/>";
echo "i have ".($a+$b). " rupees<br/>";
echo "<br/>";
$filename=fopen("para.txt","r") or die("not a valid file");
while(!feof($filename))
{ 
echo fgets($filename)."<br/>";
 }
fclose($filename);

readfile("para.txt") or die("not a valid file");
echo "<br/>";
//readfile("paragraph.txt") or die("not a valid file");
$newfile=fopen("newfile.txt","w");
$text="hi welcome";
fwrite($newfile,$text);
fclose($newfile);

if(!isset($_COOKIE[$cookie_name])) 
{
   echo "Cookie named '" . $cookie_name . "' is not set!<br/>";
} 
else 
{    echo "<br/>";
    echo "Cookie " . $cookie_name . " is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name]."<br/>";
}

if(count($_COOKIE) > 0) 
{
    echo "Cookies are enabled.";
} 
else 
{
    echo "Cookies are disabled.<br/>";
echo "refresh the page<br/>";
}

?> 

</body>
</html>
