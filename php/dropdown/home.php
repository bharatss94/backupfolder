<html>
<head>
<title> example for form and validation </title>
<script src="jquery-3.2.1.js"></script>
<script>
   /**
    @function calls the function based on onchange of select tag.
    calls ajax.
    redirect to @file getuser.php.
    @param sent is firstname to fetch in table.
    @return details of firstname and replaces the div tag with id pa.
   **/
  function show(val) {
    $.ajax({
      type: 'post',
      url: 'getuser.php',
      data: {
        'firstname':val
      },
      success: function (response) {   
	document.getElementById("pa").innerHTML = response;  
      } 
    });
  }

</script>
</head>
<body>
<form method="post" action="" >
<label>FirstName</label><input type="text" name="fname" id="firstname" /><br/><br/>
<label>LastName</label><input type="text" name="lname" id="lastname" /><br/><br/>
<label>email</label><input type="text" name="email" id="email"/><br/><br/>

<input type="button" id="submit" value="submit"/>
<?php
  //includes the database connection.
  include("database.php");
  //stores the query to retrieve the firstname from the userdetail.
  $sql1 = "SELECT firstname FROM userdetail";
  //executes and stores the result from $sql1 query.
  $result = $conn->query($sql1);
  //selects the tag after change of that value.
  echo '<select  onchange="show(this.value)">';
  $option ='';
  /**
  * Reading all users from table and displaing in dropdown for user to check details
  **/
  while ($row = $result->fetch_assoc() ) {
     echo $option = '<option value="'.$row['firstname'].'">'.$row['firstname'].'</option>';
  }
  echo'</select>';
?>
  <div id="pa"> Data</div>
  </form>
  <script>
   /**
    @function calls the function based on id after clicking.
    calls ajax.
    redirect to @file insertuser.php.
    @param sent is firstname,lastname,email to insert in table.
    @return option tag to select of that firstname.
   **/
    $(function() {   
      $("#submit").click(function() {
        $.ajax ({
        type: 'post',
        url: 'insertuser.php',
        data: {
                'firstname':$("#firstname").val(),
		'lastname':$("#lastname").val(),
		'email':$("#email").val()              
        },
        success: function (response) {
                       $('select').append('<option value="'+response+'">'+$("#firstname").val()+'</option>');      
        }
       });
     });
    });
  </script>
  </body>
  </html>
