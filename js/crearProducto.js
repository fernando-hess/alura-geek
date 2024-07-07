import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]")

async function crearProducto (evento) {

    evento.preventDefault();

    // Validación de la URL
    const urlInput = document.getElementById('image-url');
    const url2 = urlInput.value.toLowerCase().trim();

    const imageUrlPattern = /\.(jpeg|jpg|gif|png|bmp|webp)/i;
    const imageKeywords = /(images?|photos?)/;

    if (!imageUrlPattern.test(url2) && !imageKeywords.test(url2)) {
        alert('La URL ingresada no es válida. Por favor, ingrese una URL de imagen válida.');
        return; // Deteniene la ejecución si la url no es valida
    } else {
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    function formatearPrecio(precio) {
         return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(precio);
     }

    const precioFormateado = formatearPrecio(descripcion);

     await conexionAPI.enviarProducto(titulo, precioFormateado, url); 
    
    
    alert('Producto creado exitosamente.');
    window.location.reload();
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento));

document.querySelector('.productos__container').addEventListener('click', (event) => {
    if (event.target.closest('.producto__borrar')) {
        const productoElement = event.target.closest('.producto');
        if (productoElement) {
            productoElement.remove(); // Elimina el elemento del DOM
            alert('¡Producto eliminado!');
        }
    }
});