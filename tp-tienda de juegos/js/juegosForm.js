function guardarAlmacenamientoLocal(llave, valor) {
    localStorage.setItem(llave, JSON.stringify(valor));
}

function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

var juegos = obtenerAlmacenamientoLocal('juegos') || [];
var mensaje = document.getElementById('mensaje');

// Añadir juegos
document.getElementById("botonAñadir").addEventListener("click", function(event) {
    event.preventDefault();

    // PUEDE SER Q TENGA Q CAMBIAR EL CONST
    const añadirNombre = document.getElementById('nombreAñadir').value;
    const añadirDescripcion = document.getElementById('descripcionAñadir').value;
    const añadirPrecio = document.getElementById('precioAñadir').value;
    const añadirImagen = document.getElementById('imagenAñadir').value;


    var van = true;

    if(añadirNombre == '' || añadirDescripcion == '' || añadirPrecio == '' || añadirImagen == '') {
        mensaje.classList.add('llenarCampos');
        setTimeout(() => {mensaje.classList.remove('llenarCampos')}, 2500);
        van = false;
    } else {
        for(var i = 0; i < juegos.length; i++) {
            if(juegos[i].nombre == añadirNombre) {
                mensaje.classList.add('repetidoError');
                setTimeout(() => {mensaje.classList.remove('repetidoError')}, 2500);
                van = false;
            }
        }
    }

    if(van == true) {
        juegos.push({
            nombre: añadirNombre,
            descripcion: añadirDescripcion,
            precio: añadirPrecio,
            urlImagen: añadirImagen
        });
        
        mensaje.classList.add('realizado');

        setTimeout(() => {
            mensaje.classList.remove('repetidoError');
            window.location.reload();
        }, 1500)
    }

    guardarAlmacenamientoLocal('juegos', juegos);
})

// Editar juegos
document.getElementById("botonEditar").addEventListener("click", function(event) {
    event.preventDefault();

    const juegoEditar = document.getElementById('juegoEditar').value;
    const atributoEditar = document.getElementById('atributoEditar').value;
    const nuevoAtributo = document.getElementById('nuevoAtributo').value;

    var van = false;

    if(juegoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
        mensaje.classList.add('llenarCampos');
        setTimeout(() => {mensaje.classList.remove('llenarCampos')}, 2500);
    } else {
        for(var i = 0; i < juegos.length; i++) {
            if(juegos[i].nombre == juegoEditar) {
                juegos[i][atributoEditar] = nuevoAtributo;
                van = true;
            }
        }

        if(van == true) {
            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('realizado');
                window.location.reload();
            }, 1500);
        }

        else {
            mensaje.classList.add('noExisteError')
            setTimeout(() => {mensaje.classList.remove('noExisteError')}, 2500);
        }

        guardarAlmacenamientoLocal('juegos', juegos);
    }

})

// Eliminar juego
document.getElementById("botonEliminar").addEventListener("click", function(event) {
    event.preventDefault();

    const juegoEliminar = document.getElementById('juegoEliminar').value;

    var van = false;

    for(var i = 0; i < juegos.length; i++) {
        if(juegos[i].nombre == juegoEliminar) {
            juegos.splice(i, 1);
            van = true;
        }
    }
    
    if(van == false) {
        mensaje.classList.add('noExisteError');
        setTimeout(() => { mensaje.classList.remove('noExisteError')}, 2500);
    } else {
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('realizado');
            window.location.reload();
        }, 1500);
    }

    guardarAlmacenamientoLocal('juegos', juegos);
})

// Mostrar juegos en select
window.addEventListener("load", () => {
    const juegoEditar = document.getElementById('juegoEditar')
    const juegoEliminar = document.getElementById('juegoEliminar')

    for(var i = 0; i < juegos.length; i++) {
        juegoEditar.innerHTML += `<option>${juegos[i].nombre}</option>`
        juegoEliminar.innerHTML += `<option>${juegos[i].nombre}</option>`
    }

    Object.keys(juegos[0]).forEach(element => {
        atributoEditar.innerHTML += `<option>${element}</option>`
    });

    var mostrarJuegos = document.getElementById('mostrarJuegos');
    mostrarJuegos.innerHTML = ''

    for(var i = 0; i < juegos.length; i++) {
        mostrarJuegos.innerHTML += `<div class="contenedorJuego"><img class="imgJuego" src="${juegos[i].urlImagen}"><div class="informacion"><p class="titulo">${juegos[i].nombre}</p><p class="precio">Precio: ${juegos[i].precio}$</p><p>Descripción: ${juegos[i].descripcion}</p></div></div>`
    }
})