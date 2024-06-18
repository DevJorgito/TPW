<?php
session_start();
include '../php/config.php'; // Incluye tu archivo de configuración de la base de datos

// Verifica si el usuario está logeado
if (!isset($_SESSION['dni'])) {
    header("Location: ../../login.html");
    exit();
}

$dni = $_SESSION['dni'];

// Obtén los datos del usuario desde la base de datos
$stmt = $conn->prepare("SELECT * FROM encuestador WHERE DNI = ?");
$stmt->bind_param("s", $dni);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
} else {
    echo "Usuario no encontrado.";
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GCN</title>
    <link rel="stylesheet" href="../css/stylesProfile.css">
</head>
<body>
    <!-- Barra de Navegación -->
    <div class="navbar">
        <div class="logo">GCN</div>
        <div class="navbar-links">
            <a href="../../index.html">Inicio</a>
            <a href="Contact.html">Contacto</a>
            <div class="dropdown">
                <button class="dropbtn"><img src="../../Img/persona.png" alt="btnperfil" class="perfil"></button>
                <div class="dropdown-content">
                    <a href="profile.php">Perfil</a>
                    <a href="#" id="logoutBtn" onclick="logout();">Cerrar Sesión</a>
                </div>
            </div>
        </div>
    </div>

    <div class="contenido">
        <img src="../../Img/machu.jpg">
    </div>

    <div class="profile-container">
        <div class="sidebar">
            <img src="../../Img/perfil.jpg" alt="Foto de perfil" class="profile-pic">
            <h2><?php echo htmlspecialchars($user['Nombres']); ?></h2>
        </div>
        <div class="profile-details">
            <div class="profile-item">
                <h3>DNI</h3>
                <p><?php echo htmlspecialchars($user['DNI']); ?></p>
            </div>
            <div class="profile-item">
                <h3>Nombres</h3>
                <p><?php echo htmlspecialchars($user['Nombres']); ?></p>
            </div>
            <div class="profile-item">
                <h3>Apellidos</h3>
                <p><?php echo htmlspecialchars($user['Apellidos']); ?></p>
            </div>
            <div class="profile-item">
                <h3>Edad</h3>
                <p><?php echo htmlspecialchars($user['Edad']); ?></p>
            </div>
            <div class="profile-item">
                <h3>Sexo</h3>
                <p><?php echo htmlspecialchars($user['Sexo']); ?></p>
            </div>
            <div class="profile-item">
                <h3>Experiencia</h3>
                <p><?php echo htmlspecialchars($user['Experiencia']); ?></p>
            </div>
            <p class="contact-info">
                En caso un dato estuviera incorrecto, por favor, no dudes en comunicarte con nosotros al <b>01 707 3000</b> para que un asesor pueda actualizar tus datos de contacto.
            </p>
        </div>
    </div>

    <script src="../JS/ScriptBtn.js"></script>

    <div class="footer">
        <div class="footer-links">
            <a href="Policy.html">Política de Privacidad</a>
        </div>
        <div class="copyright">
            Gestor de Censo Nacional - Perú © 2024
        </div>
    </div>
</body>
</html>
