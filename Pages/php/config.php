<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "censobd";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
