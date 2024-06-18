<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Encuestador_Dni = isset($_POST['encuestador_dni']) ? $_POST['encuestador_dni'] : "";
    $Dni = isset($_POST['dni']) ? $_POST['dni'] : "";
    $Num_Persona = isset($_POST['numPersona']) ? $_POST['numPersona'] : "";
    $Nombres = isset($_POST['nombres']) ? $_POST['nombres'] : "";
    $Apellidos = isset($_POST['apellidos']) ? $_POST['apellidos'] : "";
    $Sexo = isset($_POST['sexo']) ? $_POST['sexo'] : "";
    $Fecha_Nacimiento = isset($_POST['fechaNacimiento']) ? $_POST['fechaNacimiento'] : "";
    $Estado_Civil = isset($_POST['estadoCivil']) ? $_POST['estadoCivil'] : "";
    $Religion = isset($_POST['religion']) ? $_POST['religion'] : "";
    $Nivel_Educativo = isset($_POST['nivelEducativo']) ? $_POST['nivelEducativo'] : "";
    $Total_Hijos = isset($_POST['totalHijos']) ? $_POST['totalHijos'] : "";
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
    $Num_Cedula = isset($_POST['numCedula']) ? $_POST['numCedula'] : "";
    $Fecha = isset($_POST['fecha']) ? $_POST['fecha'] : "";

    mysqli_begin_transaction($conn);

    try {
        $sql_check_vivienda = "SELECT * FROM HojaCenso WHERE Num_Cedula = '$Num_Cedula'";
        $result = mysqli_query($conn, $sql_check_vivienda);

        if (mysqli_num_rows($result) == 0) {
            $sql_insert_vivienda = "INSERT INTO Vivienda (Tipo_Vivienda, Condicion, Origen_Agua, Tipo_Baño, Total_Habitaciones) 
                                    VALUES ('$Tipo_Vivienda', '$Condicion', '$Origen_Agua', '$Tipo_Baño', '$Total_Habitaciones')";
            mysqli_query($conn, $sql_insert_vivienda);
            $ID_Vivienda = mysqli_insert_id($conn);

            $sql_insert_direccion = "INSERT INTO Direccion (ID_Vivienda, Departamento, Provincia, Distrito, Calle) 
                                    VALUES ('$ID_Vivienda', '$Departamento', '$Provincia', '$Distrito', '$Calle')";
            mysqli_query($conn, $sql_insert_direccion);

            $sql_insert_infraestructura = "INSERT INTO Infraestructura (ID_Vivienda, Material_Paredes, Material_Techos, Material_Pisos) 
                                           VALUES ('$ID_Vivienda', '$Material_Paredes', '$Material_Techos', '$Material_Pisos')";
            mysqli_query($conn, $sql_insert_infraestructura);

            $sql_insert_hogar = "INSERT INTO Hogar (ID_Vivienda, Tipo_Combustible, Num_Miembros) 
                                 VALUES ('$ID_Vivienda', '$Tipo_Combustible', '$Num_Miembros')";
            mysqli_query($conn, $sql_insert_hogar);
        } else {
            $row = mysqli_fetch_assoc($result);
            $ID_Vivienda = $row['ID_Vivienda'];
        }

        $sql_get_hogar_id = "SELECT Hogar_ID FROM Hogar WHERE ID_Vivienda = '$ID_Vivienda'";
        $result = mysqli_query($conn, $sql_get_hogar_id);
        $row = mysqli_fetch_assoc($result);
        $Hogar_ID = $row['Hogar_ID'];

        $sql_insert_persona = "INSERT INTO Persona (Dni, Hogar_ID, Num_Persona, Nombres, Apellidos, Sexo, Fecha_Nacimiento, Estado_Civil, Religion, Nivel_Educativo, Total_Hijos) 
                               VALUES ('$Dni', '$Hogar_ID', '$Num_Persona', '$Nombres', '$Apellidos', '$Sexo', '$Fecha_Nacimiento', '$Estado_Civil', '$Religion', '$Nivel_Educativo', '$Total_Hijos')";
        mysqli_query($conn, $sql_insert_persona);

        $sql_insert_hojacenso = "INSERT INTO HojaCenso (Num_Cedula, Fecha, DNI, ID_Vivienda) 
                                 VALUES ('$Num_Cedula', '$Fecha', '$Encuestador_Dni','$ID_Vivienda')";
        mysqli_query($conn, $sql_insert_hojacenso);

        mysqli_commit($conn);
        http_response_code(200);
        echo "<script>alert('Datos ingresados correctamente'); window.location.href = '../html/add.php';</script>";
    exit();

    } catch (mysqli_sql_exception $exception) {
        mysqli_rollback($conn);
        throw $exception;
    }
} else {
    http_response_code(400);
    echo "Error en la solicitud";
}

mysqli_close($conn);
?>
