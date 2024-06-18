document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn img')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    const table = document.getElementById('censusTable');
    const form = document.getElementById('myform');
    const formContainer = document.getElementById('formContainer');
    const searchInput = document.getElementById('searchInput');
    let selectedRow = null;

    const mockData = {
        1: {
            numCedula: "100902",
            fecha: "2024-05-08",
            IDVivienda: "V001",
            tipoVivienda: "Particular",
            condicion: "Ocupada",
            origenAgua: "Red pública",
            tipoBano: "Privado",
            totalHabitaciones: "4",
            departamento: "Lima",
            provincia: "Lima",
            distrito: "Miraflores",
            calle: "Av Bolgnes #809",
            materialParedes: "Ladrillo",
            materialTechos: "Concreto",
            materialPisos: "Ceramica",
            tipoCombustible: "Electricidad",
            numeroMiembros: "5",
            dni: "12345678",
            numHogar: "1",
            numPersona: "1",
            nombres: "Juan",
            apellidos: "Perez",
            sexo: "Masculino",
            fechaNacimiento: "1990-01-01",
            estadoCivil: "Soltero",
            religion: "Católica",
            nivelEducativo: "Universitario",
            totalHijos: "0"
        },
        2: {
            numCedula: "100903",
            fecha: "2024-06-15",
            IDVivienda: "V002",
            tipoVivienda: "Colectiva",
            condicion: "Desocupada",
            origenAgua: "Pozo",
            tipoBano: "Compartido",
            totalHabitaciones: "3",
            departamento: "Cusco",
            provincia: "Cusco",
            distrito: "San Blas",
            calle: "Av Las Palmeras #101",
            materialParedes: "Adobe",
            materialTechos: "Madera",
            materialPisos: "Madera",
            tipoCombustible: "Gas",
            numeroMiembros: "3",
            dni: "87654321",
            numHogar: "2",
            numPersona: "2",
            nombres: "Maria",
            apellidos: "Lopez",
            sexo: "Femenino",
            fechaNacimiento: "1985-05-15",
            estadoCivil: "Casado",
            religion: "Protestante",
            nivelEducativo: "Secundaria",
            totalHijos: "2"
        }
    };

    table.addEventListener('click', (event) => {
        const targetRow = event.target.closest('tr');
        if (targetRow && targetRow.dataset.id) {
            selectedRow = targetRow;
            const id = targetRow.dataset.id;
            const data = mockData[id];
            if (data) {
                for (const key in data) {
                    if (form.elements[key]) {
                        form.elements[key].value = data[key];
                    }
                }
                formContainer.classList.remove('hidden');
            }
        }
    });

    window.modifyRecord = function() {
        if (selectedRow) {
            const id = selectedRow.dataset.id;
            if (mockData[id]) {
                for (const key in mockData[id]) {
                    if (form.elements[key]) {
                        mockData[id][key] = form.elements[key].value;
                    }
                }
                selectedRow.cells[0].innerText = form.elements['numCedula'].value;
                selectedRow.cells[1].innerText = form.elements['calle'].value;
                selectedRow.cells[2].innerText = form.elements['fecha'].value;
                alert("Registro modificado exitosamente");
                formContainer.classList.add('hidden');
                selectedRow = null;
                form.reset();
            }
        } else {
            alert("Selecciona una fila para modificar.");
        }
    };

    window.deleteRecord = function() {
        if (selectedRow) {
            const id = selectedRow.dataset.id;
            if (mockData[id]) {
                delete mockData[id];
                selectedRow.remove();
                form.reset();
                formContainer.classList.add('hidden');
                selectedRow = null;
                alert("Registro eliminado exitosamente");
            }
        } else {
            alert("Selecciona una fila para eliminar.");
        }
    };

    window.logout = function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = 'login.html'; 
    };

    searchInput.addEventListener('input', filterTable);

    function filterTable() {
        const filter = searchInput.value.toUpperCase();
        const rows = table.getElementsByTagName('tr');
        for (let i = 1; i < rows.length; i++) { 
            const cell = rows[i].getElementsByTagName('td')[0];
            if (cell) {
                const txtValue = cell.textContent || cell.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    }
});
