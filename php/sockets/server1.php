<?php
// Create a new socket
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP) or die("could not create socket");

// An example list of IP addresses owned by the computer
$sourceips['bharat']    = '127.0.0.1';
$sourceips['madcoder'] = '127.0.0.2';

// Bind the source address
socket_bind($sock, $sourceips['bharat']) or  die("could not bind socket");


// Connect to destination address
socket_connect($sock, '127.0.0.1', 80) or die("could not connect to destination");


// Write
$request = 'GET / HTTP/1.1' . "\r\n" .
           'Host: example.com' . "\r\n\r\n";
socket_write($sock, $request);

// Close
socket_close($sock);

?>

