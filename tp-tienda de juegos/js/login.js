document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("buttonInciarSesion");
  const mensajeError = document.getElementById("errorMensaje");

  //----- Boton de Enviar -------//
  button.onclick = function (event) {
    event.preventDefault();
    let errores = [];

    //----- Obtener los valores de los campos -----//
    const emailInput = document.getElementById("floatingInput").value.trim();
    const password = document.getElementById("floatingPassword").value.trim();

    //----- Validaciones ----//
    if (emailInput === "") {
      errores.push("El campo Email es obligatorio.");
    } else if (!validarEmail(emailInput)) {
      errores.push("El formato del correo electrónico no es válido.");
    }

    if (password === "") {
      errores.push("El campo Password es obligatorio.");
    } else {
      validarPassword(password, errores);
    }

    //----- Errores o enviar el formulario -----//
    if (errores.length > 0) {
      mensajeError.textContent = errores.join(", ");
      mensajeError.style.color = "red";
    } else {
      mensajeError.textContent = "";
      console.log("Formulario enviado:", emailInput, password);
      alert("¡Formulario Enviado con Éxito!");

      //----- Restablecer los campos a vacíos ----- solo si no hay errores -----//
      document.getElementById("floatingInput").value = "";
      document.getElementById("floatingPassword").value = "";
    }
  };

  function validarEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validarPassword(password, errores) {
    const numerico = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!numerico.test(password)) {
      errores.push(
        "La contraseña debe contener al menos una minúscula, mayúscula, número y un caracter especial. Mínimo 8 caracteres."
      );
    }
  }
});
