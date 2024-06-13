document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn img')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

        // Lógica para cerrar la sesión y redirigir al usuario al inicio de sesión
        localStorage.removeItem('isLoggedIn'); // Eliminar el indicador de inicio de sesión
        window.location.href = '/login.html'; // Redirigir al usuario al inicio de sesión
    });
});
