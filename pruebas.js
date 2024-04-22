const productos = [
    "nvidia geforce rtx 4060",
    "nvidia geforce rtx 4070",
    "nvidia geforce rtx 4080",
    "nvidia geforce rtx 4090",
]



 let Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")

 while(Bienvenida !== true){
     alert("si desea realizar una compra por favor haga click en 'Aceptar'")

     Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")
 }

function catalogo() {
        const mostrarCatalogo = prompt("Que tarjeta de video desea compar? \n" + productos.join("\n")).toLowerCase();
        console.log(mostrarCatalogo)

        validarProducto(mostrarCatalogo);

}

function validarProducto(validacion){
    const confirmacion = productos.includes(validacion);
    console.log(confirmacion)

     if(confirmacion){
         alert(`felicidades usted ha comprado su producto, esperamos verlo pronto`);
     }
     
      else{
          alert("por favor ingrese un producto valido de nuestro catalogo");
          catalogo()
     }
}

catalogo()
