document.addEventListener("DOMContentLoaded", function () {
  const buttonEnviar = document.getElementById("btn");
  const mensajeError = document.getElementById("errorMensaje");

  //----------- Capturas de ID's + Colores -----------------//
  document.getElementById("yourname").addEventListener("focus", cambiar);
  document.getElementById("yourname").addEventListener("blur", regresar);
  document.getElementById("lastname").addEventListener("focus", cambiar);
  document.getElementById("lastname").addEventListener("blur", regresar);
  document.getElementById("youremail").addEventListener("focus", cambiar);
  document.getElementById("youremail").addEventListener("blur", regresar);

  function cambiar(evento) {
    let componente = evento.target;
    componente.style.background = "#F0EBE3";
  }

  function regresar(evento) {
    evento.target.style.background = "white";
  }

  //----- Boton de Enviar -------//
  buttonEnviar.onclick = function () {
    let errores = [];

    //----- Obtener los valores de los campos -----//
    const nombre = document.getElementById("yourname").value.trim();
    const apellido = document.getElementById("lastname").value.trim();
    const email = document.getElementById("youremail").value.trim();
    const mensaje = document.getElementById("comment").value.trim();

   //----- Validaciones ----//
    if (nombre === "") {
      errores.push("El campo Nombre es obligatorio.");
    }
    if (apellido === "") {
      errores.push("El campo Apellido es obligatorio.");
    }
    if (email === "") {
      errores.push("El campo Email es obligatorio.");
    } else if (!validarEmail(email)) {
      errores.push("El formato del correo electrónico no es válido.");
    }
    if (mensaje === "") {
      errores.push("El campo Mensaje es obligatorio.");
    }

    //----- Errores o enviar el formulario -----//
    if (errores.length > 0) {
      mensajeError.textContent = errores.join(", ");
      mensajeError.style.color = "red";
    } else {
      mensajeError.textContent = "";
      console.log("Formulario enviado:", nombre, apellido, email, mensaje);
      alert("¡Formulario Enviado con Éxito!");

      //----- Restablecer los campos a vacíos -----//
      document.getElementById("yourname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("youremail").value = "";
      document.getElementById("comment").value = "";
    }
  };
  
  function validarEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
