import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]")

async function crearProducto (evento) {

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    // prueba
    function formatearPrecio(precio) {
         return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(precio);
     }


    const precioFormateado = formatearPrecio(descripcion);

     await conexionAPI.enviarProducto(titulo, precioFormateado, url); 
    //await conexionAPI.enviarProducto(titulo, descripcion, url);
    
    // console.log("Se creo producto")

    // window.location.href="../index.html"

}

formulario.addEventListener("submit", evento => crearProducto(evento));

// document.addEventListener('click', (event) => {
//     if (event.target.closest('.producto__borrar')) {
//         alert('¡Botón borrado ha sido clickeado!');
//     }
// });

// Agrega el event listener a los botones después de insertarlos
// const botonesBorrar = document.querySelectorAll('.producto__borrar');
// botonesBorrar.forEach(boton => {
//     boton.addEventListener('click', (event) => {
//         const productoElement = event.target.closest('.producto');
//         if (productoElement) {
//             productoElement.remove(); // Eliminar el elemento del DOM
//             alert('¡Producto eliminado!');
//         }
//     });
// });

document.querySelector('.productos__container').addEventListener('click', (event) => {
    if (event.target.closest('.producto__borrar')) {
        const productoElement = event.target.closest('.producto');
        if (productoElement) {
            productoElement.remove(); // Eliminar el elemento del DOM
            alert('¡Producto eliminado!');
        }
    }
});