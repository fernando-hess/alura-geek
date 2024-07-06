async function listarProductos() {
    

    const conexion = await fetch("https://my-json-server.typicode.com/fernando-hess/api-fake2/productos");

    const conexionConvertida = conexion.json();


    return conexionConvertida
}

async function enviarProducto (titulo, descripcion, url) {

    const productos = await listarProductos();
    const nuevoId = productos.length ? Math.max(...productos.map(producto => producto.id)) + 1 : 1;

    const conexion = await fetch("https://my-json-server.typicode.com/fernando-hess/api-fake2/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            //
            
            id: nuevoId,
            titulo: titulo,
            descripcion: descripcion,
            url: url
        })
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos, enviarProducto
}

