const productos = [
    "NVIDIA GeForce RTX 4060",
    "NVIDIA GeForce RTX 4070",
    "NVIDIA GeForce RTX 4080",
    "NVIDIA GeForce RTX 4090"
]

// "NVIDIA GeForce RTX 4060 | $300",
//  "NVIDIA GeForce RTX 4070 | $600",
//     "NVIDIA GeForce RTX 4080 | $900",
//     "NVIDIA GeForce RTX 4090 | $1500"

let Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")

while(Bienvenida !== true){
    alert("si desea realizar una compra por favor haga click en 'Aceptar'")

    Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")
}
function catalogo() {
        const mostrarCatalogo = prompt("Que tarjeta de video desea compar? \n" + productos.join("\n")).toLowerCase();

        validarProducto(mostrarCatalogo)

}

function validarProducto(){
    const confirmacion = productos;
    if(confirmacion){
        alert(`felicidades usted ha comprado su producto, esperamos verlo pronto`);
    }
    else{
        alert("por favor ingrese un producto valido de nuestro catalogo");
        catalogo()
    }
}

catalogo()