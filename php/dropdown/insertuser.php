<?php
  /**
    @insertuser.php 
     inserts the new user in userdetail table.
     @return firstname from userdetail table
  **/
  //includes the database connection. 
  include("database.php");
  //stores the firstname from @home.php
  $firstname=$_POST['firstname'];
  //stores the lastname from @home.php
  $lastname=$_POST['lastname'];
  //stores the email from @home.php
  $email=$_POST['email'];
  //query to insert the values depending upon the above values in table.
  $sql = "INSERT INTO userdetail VALUES ('$firstname','$lastname','$email')";
  $conn->query($sql);
  //query to retrieve the values depending upon the firstname.
  $sql1 = "SELECT firstname FROM userdetail where firstname='$firstname'";
  $result = $conn->query($sql1);
  while ( $row = $result->fetch_assoc() ) {
    echo $row['firstname'];
  }
?>
