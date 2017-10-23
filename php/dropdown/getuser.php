<?php
  /**
    @getuser.php return all the details from userdetail table.
  **/
  //includes thae database connection.
  include("database.php");
  //stores the firstname from the @home.php.
  $user=$_POST['firstname'];
  //query to select all the details based on firstname.
  $sql = "SELECT * FROM userdetail where firstname='$user'";
  //stores the result of the query.
  $result = $conn->query($sql);
  echo "<table>
        <tr> <th>firstname</th>
             <th>lastname</th>
             <th>email</th>
        </tr>";

  while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>".$row['firstname']."</td>";
    echo"<td>".$row['lastname']."</td>";
    echo"<td> ".$row['email']."</td>";
    echo"</tr>";
  }
  echo "</table>";
?>
