<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GCN</title>
    <link rel="stylesheet" href="../css/stylesAdd.css">
</head>

<body>
    <!-- Barra de Navegación -->
    <div class="navbar">
        <div class="logo">GCN</div>
        <div class="navbar-links">
            <a href="../../index.html">Inicio</a>
            <a href="/Pages/html/Contact.html">Contacto</a>
            <div class="dropdown">
                <button class="dropbtn"><img src="../../img/persona.png" alt="btnperfil" class="perfil"></button>
                <div class="dropdown-content">
                    <a href="Profile.php">Perfil</a>
                    <a href="#" id="logoutBtn" onclick="logout();">Cerrar Sesión</a>
                </div>
            </div>
        </div>
    </div>

    <div class="imagen">
        <img src="../../Img/machu.jpg">
    </div>
    <!-- Contenedor principal -->
    <div class="main-container">
        <!-- Contenido y formulario -->

        <div class="form-container">
            <h2 class="agregacion-info">Agregación de Información</h2>
            <br>
            <div class="form-fields" id="formFields">
                <form action="../php/add.php" method="post" id="myform">
                    <input type="hidden" name="encuestador_dni" value="<?php session_start(); echo $_SESSION['dni']; ?>">
                    <h3 class="entity-title">Hoja de Censo</h3>
                    <div class="form-row">
                        <label for="numCedula" class="label-bold">Número de Cédula</label>
                        <input type="text" name="numCedula">
                    </div>
                    <div class="form-row">
                        <label for="fecha" class="label-bold">Fecha:</label>
                        <input type="date" name="fecha">
                    </div>

                    <h3 class="entity-title">Vivienda</h3>
                    <div class="form-row">
                        <label for="tipoVivienda" class="label-bold">Tipo de Vivienda:</label>
                        <select name="tipoVivienda">
                            <option value="Particular">Particular</option>
                            <option value="Colectiva">Colectiva</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="condicion" class="label-bold">Condición:</label>
                        <select name="condicion">
                            <option value="Ocupada">Ocupada</option>
                            <option value="Desocupada">Desocupada</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="origenAgua" class="label-bold">Origen del Agua:</label>
                        <select name="origenAgua">
                            <option value="Red pública">Red pública</option>
                            <option value="Pozo">Pozo</option>
                            <option value="Rio">Río</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="tipoBano" class="label-bold">Tipo de Baño:</label>
                        <select name="tipoBano">
                            <option value="Privado">Privado</option>
                            <option value="Compartido">Compartido</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="totalHabitaciones" class="label-bold">Total de Habitaciones:</label>
                        <input type="text" name="totalHabitaciones">
                    </div>
                    <h3 class="entity-title">Direccion</h3>
                    <div class="form-row">
                        <label for="departamento" class="label-bold">Departamento:</label>
                        <input type="text" name="departamento">
                    </div>
                    <div class="form-row">
                        <label for="provincia" class="label-bold">Provincia:</label>
                        <input type="text" name="provincia">
                    </div>
                    <div class="form-row">
                        <label for="distrito" class="label-bold">Distrito:</label>
                        <input type="text" name="distrito">
                    </div>
                    <div class="form-row">
                        <label for="calle" class="label-bold">Calle:</label>
                        <input type="text" name="calle">
                    </div>
                    <h3 class="entity-title">Infraestructura</h3>
                    <div class="form-row">
                        <label for="materialParedes" class="label-bold">Material de las Paredes:</label>
                        <select name="materialParedes">
                            <option value="Ladrillo">Ladrillo</option>
                            <option value="Adobe">Adobe</option>
                            <option value="Madera">Madera</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="materialTechos" class="label-bold">Material de los Techos:</label>
                        <select name="materialTechos">
                            <option value="Concreto">Concreto</option>
                            <option value="Madera">Madera</option>
                            <option value="Calamina">Calamina</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <br>
                    <br>
                    <div class="form-row">
                        <label for="materialPisos" class="label-bold">Material de los Pisos:</label>
                        <select name="materialPisos">
                            <option value="Ceramica">Cerámica</option>
                            <option value="Madera">Madera</option>
                            <option value="Tierra">Tierra</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <h3 class="entity-title">Hogar</h3>
                    <div class="form-row">
                        <label for="tipoCombustible" class="label-bold">Tipo de Combustible:</label>
                        <select name="tipoCombustible">
                            <option value="Electricidad">Electricidad</option>
                            <option value="Gas">Gas</option>
                            <option value="Carbón">Carbón</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="numeroMiembros" class="label-bold">Número de Miembros:</label>
                        <input type="text" name="numeroMiembros">
                    </div>

                    <h3 class="entity-title">Persona</h3>
                    <div class="form-row">
                        <label for="dni" class="label-bold">DNI:</label>
                        <input type="text" name="dni">
                    </div>
                    <div class="form-row">
                        <label for="numPersona" class="label-bold">Número de Persona:</label>
                        <input type="text" name="numPersona">
                    </div>
                    <div class="form-row">
                        <label for="nombres" class="label-bold">Nombres:</label>
                        <input type="text" name="nombres">
                    </div>
                    <div class="form-row">
                        <label for="apellidos" class="label-bold">Apellidos:</label>
                        <input type="text" name="apellidos">
                    </div>
                    <div class="form-row">
                        <label for="sexo" class="label-bold">Sexo:</label>
                        <select name="sexo">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="fechaNacimiento" class="label-bold">Fecha de Nacimiento:</label>
                        <input type="date" name="fechaNacimiento">
                    </div>
                    <div class="form-row">
                        <label for="estadoCivil" class="label-bold">Estado Civil:</label>
                        <select name="estadoCivil">
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                            <option value="Viudo">Viudo</option>
                            <option value="Divorciado">Divorciado</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="religion" class="label-bold">Religión:</label>
                        <select name="religion">
                            <option value="Católica">Católica</option>
                            <option value="Protestante">Protestante</option>
                            <option value="Judía">Judía</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="nivelEducativo" class="label-bold">Nivel Educativo:</label>
                        <select name="nivelEducativo">
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria</option>
                            <option value="Universitario">Universitario</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="totalHijos" class="label-bold">Total de Hijos:</label>
                        <input type="text" name="totalHijos">
                    </div>

                    <button type="submit" name="submitButton">Enviar</button>
                </form>
            </div>
            <div id="message"></div>
        </div>
    </div>

    <!-- Pie de Página -->
    <div class="footer">
        <div class="footer-links">
            <a href="../html/Policy.html">Política de Privacidad</a>
        </div>
        <div class="copyright">
            Gestor de Censo Nacional - Perú © 2024
        </div>
    </div>
    <script src="../JS/ScriptBtn.js"></script>
    <script src="../JS/ScriptAdd.js"></script>
</body>

</html>