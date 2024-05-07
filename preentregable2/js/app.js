//carrito de compras

function agregarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("products"));
    console.log(memoria);
    if (!memoria) {
        const nuevoCoctel = nuevoProductoMemoria(producto)
        localStorage.setItem("products", JSON.stringify([nuevoCoctel]));
    } else{
        const indiceProducto = memoria.findIndex(coctel => coctel.id===producto.id);
        console.log(indiceProducto)
        const memoriaNueva = memoria;
        if(indiceProducto === -1){   
            memoriaNueva.push(nuevoProductoMemoria(producto));
            localStorage.setItem("products", JSON.stringify(memoriaNueva));
        } else{
            memoriaNueva[indiceProducto].cantidad++;
        }
        localStorage.setItem("products", JSON.stringify(memoriaNueva));
    }
    actualizarNumeroCarrito()
}
/** funcion para tomar un producto, agregarle cantidad 1 y devolverlo*/
function nuevoProductoMemoria(producto){
    const nuevoCoctel = producto;
    nuevoCoctel.cantidad = 1;
    return nuevoCoctel;
}
const cuentaCarritoElement = document.querySelector("#cuentaCarrito")

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("products"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0)
   cuentaCarritoElement.innerText = cuenta 
}
/**funcion para cargar la cantidad de productos en el icono del carrito */
actualizarNumeroCarrito()



