<?php
$servername = "localhost";  
$username = "root";   
$password = "123456"; 
$dbname = "censobd"; 

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}
?>
