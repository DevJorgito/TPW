
function showFields() {
    var category = document.getElementById("category").value;
    var formFields = document.getElementById("formFields");

    // Eliminar campos anteriores si los hay
    formFields.innerHTML = "";

    // Agregar campos según la categoría seleccionada
    switch (category) {
        case "persona":
            formFields.innerHTML = `
                <div class="form-row">
                    <label for="dni" class="label-bold">DNI:</label>
                    <input type="text" id="dni">
                </div>
                <div class="form-row">
                    <label for="numHogar" class="label-bold">Número de Hogar:</label>
                    <input type="text" id="numHogar">
                </div>
                <div class="form-row">
                    <label for="numPersona" class="label-bold">Número de Persona:</label>
                    <input type="text" id="numPersona">
                </div>
                <div class="form-row">
                    <label for="nombres" class="label-bold">Nombres:</label>
                    <input type="text" id="nombres">
                </div>
                <div class="form-row">
                    <label for="apellidos" class="label-bold">Apellidos:</label>
                    <input type="text" id="apellidos">
                </div>
                <div class="form-row">
                    <label for="sexo" class="label-bold">Sexo:</label>
                    <select id="sexo">
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="fechaNacimiento" class="label-bold">Fecha de Nacimiento:</label>
                    <input type="text" id="fechaNacimiento">
                </div>
                <div class="form-row">
                    <label for="estadoCivil" class="label-bold">Estado Civil:</label>
                    <select id="estadoCivil">
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Viudo">Viudo</option>
                        <option value="Divorciado">Divorciado</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="religion" class="label-bold">Religión:</label>
                    <select id="religion">
                        <option value="Católica">Católica</option>
                        <option value="Protestante">Protestante</option>
                        <option value="Judía">Judía</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="nivelEducativo" class="label-bold">Nivel Educativo:</label>
                    <select id="nivelEducativo">
                        <option value="Primaria">Primaria</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Universitario">Universitario</option>
                    </select>
                </div>
                <div class="form-row">
                    <label for="totalHijos" class="label-bold">Total de Hijos:</label>
                    <input type="text" id="totalHijos">
                </div>
                <button type="button" onclick="simulateSend()">Enviar</button>
            `;
            break;
        case "vivienda":
            formFields.innerHTML = `
            <div class="form-row">
                <label for="ID_Vivienda"><b>ID Vivienda:</b></label>
                <input type="text" id="IDVivienda">
            </div>
            <div class="form-row">
                <label for="tipoVivienda"><b>Tipo de Vivienda:</b></label>
                <select id="tipoVivienda">
                    <option value="Particular">Particular</option>
                    <option value="Colectiva">Colectiva</option>
                </select>
            </div>
            <div class="form-row">
                <label for="condicion"><b>Condición:</b></label>
                <select id="condicion">
                    <option value="Ocupada">Ocupada</option>
                    <option value="Desocupada">Desocupada</option>
                </select>
            </div>
            <div class="form-row">
                <label for="origenAgua"><b>Origen del Agua:</b></label>
                <select id="origenAgua">
                    <option value="Red pública">Red pública</option>
                    <option value="Pozo">Pozo</option>
                    <option value="Rio">Río</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div class="form-row">
                <label for="tipoBano"><b>Tipo de Baño:</b></label>
                <select id="tipoBano">
                    <option value="Privado">Privado</option>
                    <option value="Compartido">Compartido</option>
                </select>
            </div>
            <div class="form-row">
                <label for="totalHabitaciones"><b>Total de Habitaciones:</b></label>
                <input type="text" id="totalHabitaciones">
            </div>
            <div class="form-row">
                <label for="departamento"><b>Departamento:</b></label>
                <input type="text" id="departamento">
            </div>
            <div class="form-row">
                <label for="provincia"><b>Provincia:</b></label>
                <input type="text" id="provincia">
            </div>
            <div class="form-row">
                <label for="distrito"><b>Distrito:</b></label>
                <input type="text" id="distrito">
            </div>
            <div class="form-row">
                <label for="calle"><b>Calle:</b></label>
                <input type="text" id="calle">
            </div>
            <div class="form-row">
                <label for="materialParedes"><b>Material de las Paredes:</b></label>
                <select id="materialParedes">
                    <option value="Ladrillo">Ladrillo</option>
                    <option value="Adobe">Adobe</option>
                    <option value="Madera">Madera</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div class="form-row">
                <label for="materialTechos"><b>Material de los Techos:</b></label>
                <select id="materialTechos">
                    <option value="Concreto">Concreto</option>
                    <option value="Madera">Madera</option>
                    <option value="Calamina">Calamina</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div class="form-row">
                <label for="materialPisos"><b>Material de los Pisos:</b></label>
                <select id="materialPisos">
                    <option value="Ceramica">Cerámica</option>
                    <option value="Madera">Madera</option>
                    <option value="Tierra">Tierra</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <button type="button" onclick="simulateSend()">Enviar</button>
            `;
            break;
        case "hogar":
            formFields.innerHTML = `
            <div class="form-row">
                <label for="numeroHogar"><b>Número de Hogar:</b></label>
                <input type="text" id="numeroHogar">
            </div>
            <div class="form-row">
                <label for="ID_Vivienda"><b>ID Vivienda:</b></label>
                <input type="text" id="IDVivienda">
            </div>
            <div class="form-row">
                <label for="tipoCombustible"><b>Tipo de Combustible:</b></label>
                <select id="tipoCombustible">
                    <option value="Electricidad">Electricidad</option>
                    <option value="Gas">Gas</option>
                    <option value="Carbón">Carbón</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div class="form-row">
                <label for="numeroMiembros"><b>Número de Miembros:</b></label>
                <input type="text" id="numeroMiembros">
            </div>
            <button type="button" onclick="simulateSend()">Enviar</button>
            `;
            break;
        default:
            break;
    }
}