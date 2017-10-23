<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDBPDO";
   $db = new PDO("mysql:host=$servername;dbname=$dbname", $username,$password);
/*print_r(PDO::getAvailableDrivers());
//$conn->PDO::getAvailableDrivers();
//print_r($conn);

/* Provoke an error -- the BONES table does not exist 
$dbh->exec("INSERT INTO bones(skull) VALUES ('lucy')");

echo "\nPDO::errorCode(): ", $dbh->errorCode();
*/
/* Connect to a MySQL database using driver invocation */
/*$dsn = 'mysql:dbname=testdb;host=127.0.0.1';
$user = 'root';
$password = 'root';

try {
    $dbh = new PDO($dsn, $user, $password);
echo "database connected successfully";
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
*/
/* Provoke an error -- bogus SQL syntax */
/*$stmt = $dbh->prepare('lfdmmd');
if (!$stmt) {
    echo "\nPDO::errorInfo():\n";
    print_r($dbh->errorInfo());
}*/
//$conn = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');
/*$attributes = array(
    "AUTOCOMMIT", "ERRMODE", "CASE", "CLIENT_VERSION", "CONNECTION_STATUS",
    "ORACLE_NULLS", "PERSISTENT", "PREFETCH", "SERVER_INFO", "SERVER_VERSION",
    "TIMEOUT"
);

foreach ($attributes as $val) {
    echo "PDO::ATTR_$val: ";
    echo $dbh->getAttribute(constant("PDO::ATTR_$val")) . "\n";
}
*/
if ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql') {
  echo "Running on mysql; doing something mysql specific here\n";
}
?>
