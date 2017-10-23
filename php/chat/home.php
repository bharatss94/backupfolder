<?php 
/*

echo strtr(file_get_contents('templates/main_page.html'), $aKeys);
$sonlineMembers=array('bharat');
$aKeys = array(

    '{chat_name}' => $sChatName,

    '{rooms}' => $sRooms,

    '{new_room}' => $sNewRoom,

    '{form}' => $sLoginForm . $sErrors,

    '{chat}' => $sChat,

    '{input}' => $sInput,

    '{profiles}' => $sProfiles,

    '{online_members}' => $sOnlineMembers,

    '{avatar}' => $sAvatar,

    '{priv_js}' => $sPrivChatJs

);
*/
//return file_get_contents('templates/login_form.html');
// draw common page
/*$sOnlineMembers='bharat';
$aKeys = array(
   '{online_members}' => $sOnlineMembers,
);

//print_r($aKeys['online_members']);
echo strtr(file_get_contents('templates/main_page.html'), $aKeys);

*/
require_once('classes/CMySQL.php'); // including service class to work with database

require_once('classes/CLogin.php'); // including service class to work with login processing

require_once('classes/CProfiles.php'); // including service class to work with profiles


if (isset($_SESSION['member_name']) && $_SESSION['member_name'] && $_SESSION['member_pass']) {

// get profiles lists

//setInterval ( "myFunction()", 1000 );                 

//function myFunction(){

//$name=$_SESSION['member_name'];

//echo "<script> console.log($name)</script>";

$sProfiles = $GLOBALS['CProfiles']->getProfilesBlock();

$sOnlineMembers = $GLOBALS['CProfiles']->getProfilesBlock(10, true);

}













// get profile avatar

$sAvatar = $GLOBALS['CProfiles']->getProfileAvatarBlock();



// draw common page

$aKeys = array(

    '{chat_name}' => $sChatName,

    '{rooms}' => $sRooms,

    '{new_room}' => $sNewRoom,

    '{form}' => $sLoginForm . $sErrors,

    '{chat}' => $sChat,

    '{input}' => $sInput,

    '{profiles}' => $sProfiles,

    '{online_members}' => $sOnlineMembers,

    '{avatar}' => $sAvatar,

    '{priv_js}' => $sPrivChatJs

);



echo strtr(file_get_contents('templates/main_page.html'), $aKeys);

?>
