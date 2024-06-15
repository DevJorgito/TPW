<?php
include 'conexion.php'; // Incluye el archivo de conexión a la base de datos

// Verificar si se han enviado los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $Dni = isset($_POST['dni']) ? $_POST['dni'] : "";
    $Num_Hogar = isset($_POST['numHogar']) ? $_POST['numHogar'] : "";
    $Num_Persona = isset($_POST['numPersona']) ? $_POST['numPersona'] : "";
    $Nombres = isset($_POST['nombres']) ? $_POST['nombres'] : "";
    $Apellidos = isset($_POST['apellidos']) ? $_POST['apellidos'] : "";
    $Sexo = isset($_POST['sexo']) ? $_POST['sexo'] : "";
    $Fecha_Nacimiento = isset($_POST['fechaNacimiento']) ? $_POST['fechaNacimiento'] : "";
    $Estado_Civil = isset($_POST['estadoCivil']) ? $_POST['estadoCivil'] : "";
    $Religion = isset($_POST['religion']) ? $_POST['religion'] : "";
    $Nivel_Educativo = isset($_POST['nivelEducativo']) ? $_POST['nivelEducativo'] : "";
    $Total_Hijos = isset($_POST['totalHijos']) ? $_POST['totalHijos'] : "";
    $ID_Vivienda = isset($_POST['IDVivienda']) ? $_POST['IDVivienda'] : "";
    $Tipo_Vivienda = isset($_POST['tipoVivienda']) ? $_POST['tipoVivienda'] : "";
    $Condicion = isset($_POST['condicion']) ? $_POST['condicion'] : "";
    $Origen_Agua = isset($_POST['origenAgua']) ? $_POST['origenAgua'] : "";
    $Tipo_Baño = isset($_POST['tipoBano']) ? $_POST['tipoBano'] : "";
    $Total_Habitaciones = isset($_POST['totalHabitaciones']) ? $_POST['totalHabitaciones'] : "";
    $Departamento = isset($_POST['departamento']) ? $_POST['departamento'] : "";
    $Provincia = isset($_POST['provincia']) ? $_POST['provincia'] : "";
    $Distrito = isset($_POST['distrito']) ? $_POST['distrito'] : "";
    $Calle = isset($_POST['calle']) ? $_POST['calle'] : "";
    $Material_Paredes = isset($_POST['materialParedes']) ? $_POST['materialParedes'] : "";
    $Material_Techos = isset($_POST['materialTechos']) ? $_POST['materialTechos'] : "";
    $Material_Pisos = isset($_POST['materialPisos']) ? $_POST['materialPisos'] : "";
    $Tipo_Combustible = isset($_POST['tipoCombustible']) ? $_POST['tipoCombustible'] : "";
    $Num_Miembros = isset($_POST['numeroMiembros']) ? $_POST['numeroMiembros'] : "";

    // Insertar datos en las tablas correspondientes
    $sql_persona = "INSERT INTO persona (Dni, Num_Hogar, Num_Persona, Nombres, Apellidos, Sexo, Fecha_Nacimiento, Estado_Civil, Religion, Nivel_Educativo, Total_Hijos) VALUES ('$Dni', '$Num_Hogar', '$Num_Persona', '$Nombres', '$Apellidos', '$Sexo', '$Fecha_Nacimiento', '$Estado_Civil', '$Religion', '$Nivel_Educativo', '$Total_Hijos')";
    $sql_vivienda = "INSERT INTO vivienda (ID_Vivienda, Tipo_Vivienda, Condicion, Origen_Agua, Tipo_Baño, Total_Habitaciones) VALUES ('$ID_Vivienda', '$Tipo_Vivienda', '$Condicion', '$Origen_Agua', '$Tipo_Baño', '$Total_Habitaciones')";
    $sql_direccion = "INSERT INTO direccion (ID_Vivienda, Departamento, Provincia, Distrito, Calle) VALUES ('$ID_Vivienda', '$Departamento', '$Provincia', '$Distrito', '$Calle')";
    $sql_infraestructura = "INSERT INTO infraestructura (ID_Vivienda, Material_Paredes, Material_Techos, Material_Pisos) VALUES ('$ID_Vivienda', '$Material_Paredes', '$Material_Techos', '$Material_Pisos')";
    $sql_hogar = "INSERT INTO hogar (Num_Hogar, ID_Vivienda, Tipo_Combustible, Num_Miembros) VALUES ('$Num_Hogar', '$ID_Vivienda', '$Tipo_Combustible', '$Num_Miembros')";

    // Ejecutar las consultas SQL
    if ($conn->query($sql_persona) === TRUE &&
        $conn->query($sql_vivienda) === TRUE &&
        $conn->query($sql_direccion) === TRUE &&
        $conn->query($sql_infraestructura) === TRUE &&
        $conn->query($sql_hogar) === TRUE) {
        echo "Datos agregados exitosamente";
    } else {
        echo "Error al agregar datos: " . $conn->error;
    }
} else {
    echo "Error: No se han enviado datos del formulario.";
}

// Cerrar la conexión
$conn->close();
?>
