function cargarCampos(entidad, data) {
    const camposDiv = document.getElementById('campos');
    camposDiv.innerHTML = ''; // Limpiar campos anteriores

    let camposHTML = '';

    if (entidad === 'encuestador') {
        camposHTML = `
            <label for="DNI">DNI:</label>
            <input type="text" id="DNI" name="DNI" value="${data.DNI || ''}" required>
            <label for="Clave">Clave:</label>
            <input type="text" id="Clave" name="Clave" value="${data.Clave || ''}" required>
            <label for="Nombres">Nombres:</label>
            <input type="text" id="Nombres" name="Nombres" value="${data.Nombres || ''}" required>
            <label for="Apellidos">Apellidos:</label>
            <input type="text" id="Apellidos" name="Apellidos" value="${data.Apellidos || ''}" required>
            <label for="Edad">Edad:</label>
            <input type="number" id="Edad" name="Edad" value="${data.Edad || ''}" required>
            <label for="Sexo">Sexo:</label>
            <input type="text" id="Sexo" name="Sexo" value="${data.Sexo || ''}" required>
            <label for="Experiencia">Experiencia:</label>
            <input type="text" id="Experiencia" name="Experiencia" value="${data.Experiencia || ''}" required>
        `;
    } else if (entidad === 'persona') {
        camposHTML = `
            <label for="Dni">Dni:</label>
            <input type="text" id="Dni" name="Dni" value="${data.Dni || ''}" required>
            <label for="Num_Hogar">Num Hogar:</label>
            <input type="text" id="Num_Hogar" name="Num_Hogar" value="${data.Num_Hogar || ''}" required>
            <label for="Num_Persona">Num Persona:</label>
            <input type="text" id="Num_Persona" name="Num_Persona" value="${data.Num_Persona || ''}" required>
            <label for="Nombres">Nombres:</label>
            <input type="text" id="Nombres" name="Nombres" value="${data.Nombres || ''}" required>
            <label for="Apellidos">Apellidos:</label>
            <input type="text" id="Apellidos" name="Apellidos" value="${data.Apellidos || ''}" required>
            <label for="Sexo">Sexo:</label>
            <input type="text" id="Sexo" name="Sexo" value="${data.Sexo || ''}" required>
            <label for="Fecha_Nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="Fecha_Nacimiento" name="Fecha_Nacimiento" value="${data.Fecha_Nacimiento || ''}" required>
            <label for="Estado_Civil">Estado Civil:</label>
            <input type="text" id="Estado_Civil" name="Estado_Civil" value="${data.Estado_Civil || ''}" required>
            <label for="Religion">Religión:</label>
            <input type="text" id="Religion" name="Religion" value="${data.Religion || ''}" required>
            <label for="Nivel_Educativo">Nivel Educativo:</label>
            <input type="text" id="Nivel_Educativo" name="Nivel_Educativo" value="${data.Nivel_Educativo || ''}" required>
            <label for="Total_Hijos">Total de Hijos:</label>
            <input type="number" id="Total_Hijos" name="Total_Hijos" value="${data.Total_Hijos || ''}" required>
        `;
    } else if (entidad === 'vivienda') {
        camposHTML = `
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" value="${data.ID_Vivienda || ''}" required>
            <label for="Tipo_Vivienda">Tipo de Vivienda:</label>
            <input type="text" id="Tipo_Vivienda" name="Tipo_Vivienda" value="${data.Tipo_Vivienda || ''}" required>
            <label for="Condicion">Condición:</label>
            <input type="text" id="Condicion" name="Condicion" value="${data.Condicion || ''}" required>
            <label for="Origen_Agua">Origen del Agua:</label>
            <input type="text" id="Origen_Agua" name="Origen_Agua" value="${data.Origen_Agua || ''}" required>
            <label for="Tipo_Baño">Tipo de Baño:</label>
            <input type="text" id="Tipo_Baño" name="Tipo_Baño" value="${data.Tipo_Baño || ''}" required>
            <label for="Total_Habitaciones">Total de Habitaciones:</label>
            <input type="number" id="Total_Habitaciones" name="Total_Habitaciones" value="${data.Total_Habitaciones || ''}" required>
        `;
    } else if (entidad === 'hogar') {
        camposHTML = `
            <label for="Num_Hogar">Num Hogar:</label>
            <input type="text" id="Num_Hogar" name="Num_Hogar" value="${data.Num_Hogar || ''}" required>
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" value="${data.ID_Vivienda || ''}" required>
            <label for="Tipo_Combustible">Tipo de Combustible:</label>
            <input type="text" id="Tipo_Combustible" name="Tipo_Combustible" value="${data.Tipo_Combustible || ''}" required>
            <label for="Num_Miembros">Número de Miembros:</label>
            <input type="number" id="Num_Miembros" name="Num_Miembros" value="${data.Num_Miembros || ''}" required>
        `;
    } else if (entidad === 'direccion') {
        camposHTML = `
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" value="${data.ID_Vivienda || ''}" required>
            <label for="Departamento">Departamento:</label>
            <input type="text" id="Departamento" name="Departamento" value="${data.Departamento || ''}" required>
            <label for="Provincia">Provincia:</label>
            <input type="text" id="Provincia" name="Provincia" value="${data.Provincia || ''}" required>
            <label for="Distrito">Distrito:</label>
            <input type="text" id="Distrito" name="Distrito" value="${data.Distrito || ''}" required>
            <label for="Calle">Calle:</label>
            <input type="text" id="Calle" name="Calle" value="${data.Calle || ''}" required>
        `;
    } else if (entidad === 'infraestructura') {
        camposHTML = `
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" value="${data.ID_Vivienda || ''}" required>
            <label for="Material_Paredes">Material de Paredes:</label>
            <input type="text" id="Material_Paredes" name="Material_Paredes" value="${data.Material_Paredes || ''}" required>
            <label for="Material_Techos">Material de Techos:</label>
            <input type="text" id="Material_Techos" name="Material_Techos" value="${data.Material_Techos || ''}" required>
            <label for="Material_Pisos">Material de Pisos:</label>
            <input type="text" id="Material_Pisos" name="Material_Pisos" value="${data.Material_Pisos || ''}" required>
        `;
    }

    camposDiv.innerHTML = camposHTML;
    document.getElementById('btnModificar').style.display = 'block';
}

function buscarPorID() {
    const entidad = document.getElementById('entidad').value;
    const id = document.getElementById('buscarID').value;
    if (!entidad || !id) {
        alert('Por favor, seleccione una entidad e ingrese un ID válido');
        return;
    }

    fetch(`/api/${entidad}/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                cargarCampos(entidad, data);
            } else {
                alert('No se encontraron datos para el ID proporcionado');
            }
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('modificarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const entidad = document.getElementById('entidad').value;
    const id = document.getElementById('buscarID').value;

    fetch(`/api/${entidad}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Datos modificados exitosamente');
        } else {
            alert('Error al modificar los datos');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('buscarID').addEventListener('input', function() {
    var id = this.value;
    var tipoElemento = document.getElementById('entidad').value;
    if (id && tipoElemento) {
        fetchElementoData(tipoElemento, id);
    }
});

function fetchElementoData(tipo, id) {
    // Simulamos una llamada a la API con datos ficticios
    var data = {
        encuestador: { DNI: id, Clave: 'abc123', Nombres: 'Juan', Apellidos: 'Perez', Edad: 30, Sexo: 'M', Experiencia: '5 años' },
        persona: { Dni: id, Num_Hogar: '123', Num_Persona: 1, Nombres: 'Juan', Apellidos: 'Perez', Sexo: 'M', Fecha_Nacimiento: '1990-01-01', Estado_Civil: 'Soltero', Religion: 'Católico', Nivel_Educativo: 'Secundaria', Total_Hijos: 0 },
        vivienda: { ID_Vivienda: id, Tipo_Vivienda: 'Casa', Condicion: 'Buena', Origen_Agua: 'Público', Tipo_Baño: 'Interno', Total_Habitaciones: 3 },
        hogar: { Num_Hogar: id, ID_Vivienda: '123', Tipo_Combustible: 'Gas', Num_Miembros: 4 },
        direccion: { ID_Vivienda: id, Departamento: 'Lima', Provincia: 'Lima', Distrito: 'Miraflores', Calle: 'Av. Larco' },
        infraestructura: { ID_Vivienda: id, Material_Paredes: 'Ladrillo', Material_Techos: 'Concreto', Material_Pisos: 'Madera' }
    };

    var elementoData = data[tipo];
    var camposElementoDiv = document.getElementById('campos');
    camposElementoDiv.innerHTML = ''; // Limpiar campos anteriores

    for (var key in elementoData) {
        if (elementoData.hasOwnProperty(key)) {
            camposElementoDiv.innerHTML += `
                <div>
                    <label for="${key}">${key.replace(/_/g, ' ')}:</label>
                    <input type="text" id="${key}" name="${key}" value="${elementoData[key]}">
                </div>
            `;
        }
    }

    document.getElementById('btnModificar').style.display = 'block';
}

document.getElementById('modificarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const entidad = document.getElementById('entidad').value;
    const id = document.getElementById('buscarID').value;

    console.log(`Modificando el elemento con ID ${id} en la entidad ${entidad}:`, data);
    alert('Datos modificados exitosamente (simulado)');
});
