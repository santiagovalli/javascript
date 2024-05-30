//carrito de compras

const cuentaCarritoElement = document.querySelector("#cuentaCarrito")

// funcion para actualizar el numero en el icono del carrito
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("products"));
    if (memoria && memoria.length > 0) {
        const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0)
        cuentaCarritoElement.innerText = cuenta
    } else {
        cuentaCarritoElement.innerText = 0;
    }

}

// funcion para agregar cocteles al carrito
function agregarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("products"));

    let cuenta = 0
    if (!memoria) {
        const nuevoCoctel = nuevoProductoMemoria(producto)
        localStorage.setItem("products", JSON.stringify([nuevoCoctel]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(coctel => coctel.id === producto.id);
        const memoriaNueva = memoria;
        if (indiceProducto === -1) {
            memoriaNueva.push(nuevoProductoMemoria(producto));
            localStorage.setItem("products", JSON.stringify(memoriaNueva));
            cuenta = 1;
        } else {
            memoriaNueva[indiceProducto].cantidad++;
            cuenta = memoriaNueva[indiceProducto].cantidad;
        }
        localStorage.setItem("products", JSON.stringify(memoriaNueva));

    }
    actualizarNumeroCarrito()
    return cuenta;
}

// funcion para restar un producto al carrito
function restarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("products"));
    const indiceProducto = memoria.findIndex(coctel => coctel.id === producto.id);
    if (memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto, 1);
        localStorage.setItem("products", JSON.stringify(memoria));
    } else {
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("products", JSON.stringify(memoria));
    actualizarNumeroCarrito();
}


/** funcion para tomar un producto, agregarle cantidad 1 y devolverlo*/
function nuevoProductoMemoria(producto) {
    const nuevoCoctel = producto;
    nuevoCoctel.cantidad = 1;
    return nuevoCoctel;
}



/*funcion para cargar la cantidad de productos en el icono del carrito */
actualizarNumeroCarrito()



