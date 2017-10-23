<?php
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
