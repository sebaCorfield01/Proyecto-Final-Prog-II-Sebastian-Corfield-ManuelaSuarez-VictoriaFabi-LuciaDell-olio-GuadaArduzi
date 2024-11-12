function guardarAlmacenamientoLocal(llave, valor) {
    localStorage.setItem(llave, JSON.stringify(valor));
}

function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos;
}

var juegos = obtenerAlmacenamientoLocal('juegos') || [];

const body = document.querySelector("body");
const header = document.querySelector("#header");
const logoCarrito = document.getElementById('cartLogo');
const numeroCarrito = document.getElementById('cartNumber');
const contenedorCarrito = document.getElementById('cartContainer');
const infoCarrito = document.getElementById('cartInfo');
const botonVaciarCarrito = document.getElementById('empty-button');
const productosCarrito = document.getElementById('resume-products');
const botonEliminarProducto = document.getElementById('deleteProductButton');
const totalCarrito = document.getElementById('cartSummary');
const subtotalElemento = totalCarrito.querySelectorAll('p')[0]; // Selecciona el primer <p>
const totalElemento = totalCarrito.querySelector('h5'); // Selecciona el <h5>

var lista = [];
var valorTotal = 0;

/*window.addEventListener('load', () =>{
    visualizarJuego();
})

// mostrar todos los productos
const main = document.querySelector("#main");
function visualizarJuego() {
    main.innerHTML = "";
    for(var i = 0; i < juegos.length; i++) {
        main.innerHTML += `<div class="contenedorJuego"><img class="imgJuego" src="${juegos[i].urlImagen}"><div class="informacion"><p class="titulo">${juegos[i].nombre}</p><p class="precio">${juegos[i].precio}$</p><button onclick=comprar(${i})>Comprar</button></div></div>`
    }
}*/

// comprar
function comprar(indice) {
    lista.push({nombre: juegos[indice].nombre, precio: juegos[indice].precio, imagen: juegos[indice].urlImagen});
    numeroCarrito.innerHTML = lista.length;
    numeroCarrito.classList.add("diseñoNumero");
    return lista
}

function mostrarElementosLista() {
    productosCarrito.innerHTML = "";
    valorTotal = 0;
    for(var i = 0; i < lista.length; i++) {
        productosCarrito.innerHTML += `<div class="product-card"><img src="${lista[i].imagen}" alt="juego"><div><h4 class="game-name">${lista[i].nombre}</h4><h4 class="game-price">$${lista[i].precio}</h4></div><button onclick=eliminar(${i})><i class="fas fa-times" id="iconoBorrar"></i></button></div>`;
        valorTotal += parseFloat(lista[i].precio);
    }

    subtotalElemento.innerHTML = `$${valorTotal.toFixed(2)}`;
    totalElemento.innerHTML = `$${(valorTotal + 3).toFixed(2)}`;
}

// eliminar
function eliminar(indice) {

    numeroCarrito.innerHTML = lista.length;

    if(juegos[i].nombre == lista[indice.nombre]) {
        lista.splice(indice, 1);
    }

    if(lista.length == 0) {
        numeroCarrito.classList.add("diseñoNumero");
    }
    
    mostrarElementosLista();
}