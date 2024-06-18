function validarFormulario() {
    // Comprobar el código y la contraseña ingresados
    var codigo = document.getElementsByName('codigo')[0].value;
    var contraseña = document.getElementsByName('contraseña')[0].value;

    // Por ahora, asumamos que el código es "usuario" y la contraseña es "contraseña"
    if (codigo === "usuario" && contraseña === "contraseña") {
      // Redirigir al usuario a index.html
      window.location.href = "index.html";
      return false; 
    } else {
      alert("Código o contraseña incorrectos");
      return false; 
    }
  }


