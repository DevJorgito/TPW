<?php
include 'config.php';

$dni = $_POST['dni'];
$clave = md5($_POST['clave']); // Encriptar la contraseña proporcionada por el usuario

$stmt = $conn->prepare("SELECT * FROM encuestador WHERE DNI = ?");
$stmt->bind_param("s", $dni);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $stored_password = $row['Clave'];

    if ($clave === $stored_password) {
        session_start();
        $_SESSION['dni'] = $dni;
        header("Location: ../../index.html");
        exit(); 
    } else {
        header("Location: ../../login.html?error=1");
        exit(); 
    }
} else {
    header("Location: ../../login.html?error=1");
    exit(); 
}
?>
