<?php

// set error reporting level
if (version_compare(phpversion(), '5.3.0', '>=') == 1)
  error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
else
  error_reporting(E_ALL & ~E_NOTICE);

require_once('classes/Services_JSON.php');
require_once('classes/mysql.php');
  $home= file_get_contents('html/login_form.html');
//include the rofile class
//include the chat class
if($_POST['login']=='login') {
$GLOBALS['profiles']->checklogin();
}
if($_POST['register']=='register')
{
 
$GLOBALS['profiles']->registerprofile();

}



$aKeys = array(
    '{form}' => $home
);
echo strtr(file_get_contents('html/main_page.html'), $aKeys);


?>
