// script.js

// Seleccionamos los elementos necesarios del DOM
const precio = document.querySelector('#precio');
const cantidad = document.querySelector('#cantidad');
const total = document.querySelector('#total');

const btnIncrementar = document.querySelector('#incrementar');
const btnDecrementar = document.querySelector('#decrementar');

// Inicializamos los valores
let precioUnitario = parseFloat(precio.textContent);
let cantidadActual = parseInt(cantidad.textContent);

// Función para actualizar el total
function actualizarTotal() {
    total.textContent = (precioUnitario * cantidadActual).toFixed(2);
}

// Eventos para los botones
btnIncrementar.addEventListener('click', () => {
    cantidadActual++;
    cantidad.textContent = cantidadActual;
    actualizarTotal();
});

btnDecrementar.addEventListener('click', () => {
    if (cantidadActual > 1) { // evitamos cantidad negativa o cero
        cantidadActual--;
        cantidad.textContent = cantidadActual;
        actualizarTotal();
    }
});
