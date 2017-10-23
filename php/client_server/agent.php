<!DOCTYPE HTML>
<html>
<head>
<title>Login </title>
</head>
<body>
<h1> Enter Username of agent to login</h1>
<form  method="post" style="align:center;">
<label>Username</label><input type="text" name="username" /><br/><br/>

<!--<label>Password</label><input type="password" name="password" /><br/><br/>
-->
<input type="submit" name="submit"/>



<?php

if (isset($_POST['submit']))
{	
session_start();
$_SESSION['usertype']="agent";
$username=$_POST['username'];
$_SESSION['username']=$username;
//include('websocket.php');

echo "<h1> welcome ".$username."</h1>";
echo "<h3><a href='index1.php'> click on me to go have conversation</a></h3>";


}

?>
<!--<script src="jquery-3.1.1.js"></script>

 <script language="javascript" type="text/javascript">
$(document).ready(function(){
       console.log('test');
        //create a new WebSocket object.
      var wsUri = "ws://localhost:5570/client_server/server.php";     
   websocket = new WebSocket(wsUri); 
 websocket.onopen = function(ev) { // connection is open 
                $('#message_box').append("<div class=\"system_msg\">Connected!</div>"); //notify user
        }


});
<script> --> 
</form>
</body>
</html>
