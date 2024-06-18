document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

    var formData = new FormData(this); // Obtener los datos del formulario
    var xhr = new XMLHttpRequest(); // Crear una nueva solicitud HTTP

    xhr.open("POST", "../php/add.php", true); // Configurar la solicitud
    xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // El formulario se ha enviado correctamente
        alert("Datos ingresados correctamente");
        // Puedes limpiar los campos del formulario si es necesario
    } else {
        // Hubo un error al enviar el formulario
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    }
};


    xhr.send(formData); // Enviar los datos del formulario al servidor
});