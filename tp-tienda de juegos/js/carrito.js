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
const totalCarrito = document.getElementById('cartSummary');

var lista = [];
var valorTotal = 0;

window.addEventListener()

// mostrar todos los productos
/*const main = document.querySelector("#main");
function visualizarJuego() {
    main.innerHTML = "";
    for(var i = 0; i < juegos.length; i++) {
        main.innerHTML += `<div class="contenedorJuego"><img class="imgJuego" src="${juegos[i].urlImagen}"><div class="informacion"><p class="titulo">${juegos[i].nombre}</p><p class="precio">${juegos[i].precio}$</p><button onclick=comprar(${i})>Comprar</button></div></div>`
    }
}*/

// comprar
function comprar(indice) {
    lista.push({nombre: juegos[indice].nombre, precio: juegos[indice].precio});
    numeroCarrito.innerHTML = lista.length;
}