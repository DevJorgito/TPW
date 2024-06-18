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

const baseRedirectUrl = '../../'; // Ruta base para la redirección

function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Verificar si la página actual es el index.html
    if (window.location.pathname.endsWith('index.html')) {
        window.location.href = 'login.html'; // Redirigir al login.html dentro de la carpeta html
    } else {
        window.location.href = baseRedirectUrl + 'login.html'; // Redirigir al login.html fuera de la carpeta html
    }
}