<!DOCTYPE HTML>
<html>
<head>
<title> example for form and validation </title>
</head>
<body>
<?php
$fnameErr =$lnameErr = $phoneErr ="";
$fname = $lname = $phone = $address ="";  

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["fname"])) {
    $fnameErr = "First Name is required";
  } else {
    $fname = $_POST["fname"];
 
    if (!preg_match("/^[a-zA-Z ]*$/",$fname)) {
      $fnameErr = "Not a valid firstname";
    }
  }

 if (empty($_POST["lname"])) {
    $lnameErr = "";
  } else {
    $lname = $_POST["lname"];
   
    if (!preg_match("/^[a-zA-Z ]*$/",$lname)) {
      $lnameErr = "Not a valid LastName";
    }
  }
 if (empty($_POST["phone"])) {
    $phoneErr = "Phone number is required";
  } else {
    $phone = $_POST["phone"];
  
    if (!preg_match("/^\d{10}$/",$phone)) {
      $phoneErr = "Not a valid phone number";
    }
  }
if (empty($_POST["address"])) {
    $address = "";
  } else {
    $address = $_POST["address"];
  
  }

}
?>
<h1> enter the form for validation</h1>
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
<label>*FirstName</label><input type="text" name="fname" value="<?php echo $fname?>"/><?php echo $fnameErr ?><br/><br/>
<label>LastName</label><input type="text" name="lname" value="<?php echo $lname?>"/><?php echo $lnameErr ?><br/><br/>
<label>*Mobile No</label><input type="text" name="phone" value="<?php echo $phone?>"/><?php echo $phoneErr ?><br/><br/>
<label>address</label> <textarea name="address" rows="05" cols="10" value="<?php echo $address; ?>"></textarea><br/><br/>
<input type="submit" name="submit"/>


</form>
<?php 
echo "<h1> entered details are </h1>";
echo $fname;
echo "<br/>";
echo $lname;
echo "<br/>";
echo $phone;
echo "<br/>";
echo $address;
echo "<br/>";

?>
</body>
</html>
