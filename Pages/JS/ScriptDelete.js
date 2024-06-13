document.getElementById('tipoElemento').addEventListener('change', function() {
    var selectedOption = this.value;
    var idElementoDiv = document.getElementById('idElementoDiv');
    
    if (selectedOption !== '') {
        idElementoDiv.style.display = 'block';
    } else {
        idElementoDiv.style.display = 'none';
        document.getElementById('camposElemento').style.display = 'none';
    }
});

document.getElementById('idElemento').addEventListener('blur', function() {
    var id = this.value;
    var tipoElemento = document.getElementById('tipoElemento').value;
    if (id && tipoElemento) {
        // Aquí realizarías una solicitud a la API para obtener los datos del elemento
        // Supongamos que tienes una función llamada fetchElementoData que hace esto
        fetchElementoData(tipoElemento, id);
    }
});

function fetchElementoData(tipo, id) {
    // Simulamos una llamada a la API con datos ficticios
    var data = {
        vivienda: { ID_Vivienda: id, Tipo_Vivienda: 'Casa', Condicion: 'Buena', Origen_Agua: 'Público', Tipo_Baño: 'Interno', Total_Habitaciones: 3 },
        hogar: { Num_Hogar: id, ID_Vivienda: '123', Tipo_Combustible: 'Gas', Num_Miembros: 4 },
        persona: { Dni: id, Num_Hogar: '123', Num_Persona: 1, Nombres: 'Juan', Apellidos: 'Perez', Sexo: 'M', Fecha_Nacimiento: '1990-01-01', Estado_Civil: 'Soltero', Religion: 'Católico', Nivel_Educativo: 'Secundaria', Total_Hijos: 0 }
    };

    var elementoData = data[tipo];
    var camposElementoDiv = document.getElementById('camposElemento');
    camposElementoDiv.innerHTML = ''; // Limpiar campos anteriores

    for (var key in elementoData) {
        if (elementoData.hasOwnProperty(key)) {
            camposElementoDiv.innerHTML += `
                <div>
                    <label for="${key}">${key.replace(/_/g, ' ')}:</label>
                    <input type="text" id="${key}" name="${key}" value="${elementoData[key]}" disabled>
                </div>
            `;
        }
    }
    camposElementoDiv.style.display = 'block';
}