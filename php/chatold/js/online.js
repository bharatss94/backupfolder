if (isset($_SESSION['member_name']) && $_SESSION['member_name'] && $_SESSION['member_pass']) {// get profiles lists$sProfiles = $GLOBALS['CProfiles']->getProfilesBlock();$sOnlineMembers = $GLOBALS['CProfiles']->getProfilesBlock(10, true);}Sent on:TueFrom:samba siva reddy$(function(){function get_fb_complete(){    var feedback = $.aja{        type: "POST",        url: "index.php?action=online",        async: false    }).complete(function(){        setTimeout(function(){get_fb_complete();}, 10
