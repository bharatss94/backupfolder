<?php

// set error reporting level
if (version_compare(phpversion(), "5.3.0", ">=") == 1)
  error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
else
  error_reporting(E_ALL & ~E_NOTICE);

require_once('classes/CMySQL.php'); // including service class to work with database
require_once('classes/CLogin.php'); // including service class to work with login processing

// login system init and generation code
$sLoginForm = $GLOBALS['CLogin']->getLoginBox();

$sChat = ($_SESSION['member_name'] && $_SESSION['member_status'] == 'active') ? '<h2>TODO chat</h2>' : '<h2>You have to login before use chat</h2>';

echo strtr(file_get_contents('templates/main_page.html'), array('{form}' => $sLoginForm, '{chat}' => $sChat));

