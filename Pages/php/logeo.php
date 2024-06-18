<?php

include 'config.php'; // Incluye el archivo de conexión a la base de datos

// Obtener los datos enviados desde el formulario
$dni = $_POST['dni'];
$clave = $_POST['clave'];

// Preparar y ejecutar la consulta SQL para verificar las credenciales del encuestador
$stmt = $conn->prepare("SELECT * FROM encuestador WHERE DNI = ? AND Clave = ?");
$stmt->bind_param("ss", $dni, $clave);
$stmt->execute();
$result = $stmt->get_result();

// Verificar si se encontró un encuestador con las credenciales proporcionadas
if ($result->num_rows > 0) {
    // Iniciar sesión
    session_start();
    $_SESSION['dni'] = $dni;
    // Redirigir al usuario a la página de inicio
    header("Location: index.html");
} else {
    // Si las credenciales son incorrectas, redirigir de vuelta a la página de inicio de sesión con un mensaje de error
    header("Location: login.html?error=1");
}

// Cerrar conexión a la base de datos
$stmt->close();
$conn->close();
?>
