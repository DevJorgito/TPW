<?php
include 'config.php';

// Obtener el DNI y la contraseña enviados desde el formulario
$dni = $_POST['dni'];
$clave = md5($_POST['clave']); // Encriptar la contraseña proporcionada por el usuario

// Consultar la base de datos para encontrar el encuestador con el DNI especificado
$stmt = $conn->prepare("SELECT * FROM encuestador WHERE DNI = ?");
$stmt->bind_param("s", $dni);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $stored_password = $row['Clave'];

    // Verificar si la contraseña encriptada coincide con la almacenada en la base de datos
    if ($clave === $stored_password) {
        // Contraseña válida, iniciar sesión
        session_start();
        $_SESSION['dni'] = $dni;
        // Redirigir al usuario a la página de inicio
        header("Location: ../../index.html");
        exit(); // Terminar la ejecución del script después de la redirección
    } else {
        // Contraseña incorrecta, redirigir de vuelta a la página de inicio de sesión con un mensaje de error
        header("Location: login.html?error=1");
        exit(); // Terminar la ejecución del script después de la redirección
    }
} else {
    // Usuario no encontrado, redirigir de vuelta a la página de inicio de sesión con un mensaje de error
    header("Location: login.html?error=1");
    exit(); // Terminar la ejecución del script después de la redirección
}
?>
<?php
// Obtener el DNI y la contraseña enviados desde el formulario
$dni = $_POST['dni'];
$clave = md5($_POST['clave']); // Encriptar la contraseña proporcionada por el usuario

// Consultar la base de datos para encontrar el encuestador con el DNI especificado
$stmt = $conn->prepare("SELECT * FROM encuestador WHERE DNI = ?");
$stmt->bind_param("s", $dni);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $stored_password = $row['Clave'];

    // Verificar si la contraseña encriptada coincide con la almacenada en la base de datos
    if ($clave === $stored_password) {
        // Contraseña válida, iniciar sesión
        session_start();
        $_SESSION['dni'] = $dni;
        // Redirigir al usuario a la página de inicio
        header("Location: index.html");
        exit(); // Terminar la ejecución del script después de la redirección
    } else {
        // Contraseña incorrecta, redirigir de vuelta a la página de inicio de sesión con un mensaje de error
        header("Location: login.html?error=1");
        exit(); // Terminar la ejecución del script después de la redirección
    }
} else {
    // Usuario no encontrado, redirigir de vuelta a la página de inicio de sesión con un mensaje de error
    header("Location: login.html?error=1");
    exit(); // Terminar la ejecución del script después de la redirección
}
?>
