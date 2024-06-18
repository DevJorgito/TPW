document.addEventListener('DOMContentLoaded', function() {
  function handleLoginFormSubmit(event) {
      event.preventDefault();

      var dni = document.getElementById('dni').value;
      var clave = document.getElementById('clave').value;

      var formData = new FormData();
      formData.append('dni', dni);
      formData.append('clave', clave);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '../php/login.php', true);
      xhr.onload = function() {
          var response = JSON.parse(xhr.responseText);

          if (xhr.status === 200 && response.success) {
              window.location.href = response.redirect;
          } else {
              var errorMessage = response.message || 'Ocurrió un error durante el inicio de sesión. Por favor, inténtalo de nuevo.';
              document.getElementById('error-message').innerText = errorMessage;
              document.getElementById('error-message').style.display = 'block';
          }
      };
      xhr.onerror = function() {
          var errorMessage = 'Ocurrió un error durante la solicitud al servidor. Por favor, inténtalo de nuevo.';
          document.getElementById('error-message').innerText = errorMessage;
          document.getElementById('error-message').style.display = 'block';
      };
      xhr.send(formData);
  }

  var loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', handleLoginFormSubmit);
});
