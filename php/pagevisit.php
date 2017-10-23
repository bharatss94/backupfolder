 <?php 

 if (!isset($_COOKIE['pagecount']))
    {
       echo "you have visited first time<br/>";

        $cookie = 1;
        setcookie("pagecount", $cookie);
    }
 else
    {
        $cookie = $_COOKIE['pagecount']++;
        setcookie("pagecount", $cookie);
 echo "You have viewed this page" .$_COOKIE['pagecount']. " time<br/>". 
 }
?> 
