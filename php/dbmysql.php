<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname="myDB";
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
/*
// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}
*/
$conn->close();

$conn = new mysqli($servername, $username, $password, $dbname);
// sql to create table
$sql = "CREATE TABLE registration (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
username VARCHAR(30) PRIMARY KEY,
email VARCHAR(50),
logintime TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();



$conn = new mysqli($servername, $username, $password, $dbname);

// prepare and bind
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("ssss", $firstname, $lastname, $email,$reg_date);

// set parameters and execute
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$reg_date=date("h:i:sa");
$stmt->execute();

$firstname = "Mary";
$lastname = "Moe";
$email = "mary@example.com";

$reg_date=date("h:i:sa");

$stmt->execute();

$firstname = "Julie";
$lastname = "Dooley";
$email = "julie@example.com";
$reg_date=date("h:i:sa");

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();


$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();

?>
