// const productos = [
//     "nvidia geforce rtx 4060",
//     "nvidia geforce rtx 4070",
//     "nvidia geforce rtx 4080",
//     "nvidia geforce rtx 4090",
// ]



//  let Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")

//  while(Bienvenida !== true){
//      alert("si desea realizar una compra por favor haga click en 'Aceptar'")

//      Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")
//  }

// function catalogo() {
//         const mostrarCatalogo = prompt("Que tarjeta de video desea compar? \n" + productos.join("\n")).toLowerCase();
//         console.log(mostrarCatalogo)

//         validarProducto(mostrarCatalogo);

// }

// function validarProducto(validacion){
//     const confirmacion = productos.includes(validacion);
//     console.log(confirmacion)

//      if(confirmacion){
//          alert(`felicidades usted ha comprado su producto, esperamos verlo pronto`);
//      }
     
//       else{
//           alert("por favor ingrese un producto valido de nuestro catalogo");
//           catalogo()
//      }
// }

// catalogo()

const products = [
    {
        id:1 ,
        name: "margarita",
        img: "../img/margarita.webp"  ,
        description:"Tequila 100% agave, Triple sec, jugo de limon" ,
        price: 5, 
    },
    {
        id:2 ,
        name: "scpicyMargarita" ,
        img: "../img/spicyMargarita.webp" ,
        description:"Tequila 100% agave, Triple sec, jugo de limon, rodajas de jalapeño" ,
        price: 5.50, 
    },
    {
        id:3 ,
        name: "pinaColada" ,
        img: "../img/pinaColada.webp",
        description:"Ron blanco, crema de coco, jugo de piña" ,
        price: 6, 
    },
    {
        id:4 ,
        name: "oldFashioned",
        img: "../img/oldFashioned.webp" ,
        description: "Bourbon o rye whiskey,bitters, pizca de agua, terron de azucar",
        price: 7, 
    },
    {
        id:5 ,
        name: "mojito",
        img: "../img/mojito.webp" ,
        description:"Ron cubano, jugo de limon, hojas de menta, caña de azucar,agua con gas" ,
        price: 6.50,
    },
    {
        id:6 ,
        name: "cubaLibre",
        img: "../img/cubaLibre.webp",
        description:"Ron cubano, rodajas de limon, coca-cola" ,
        price: 4.50, 
    },
    {
        id:7 ,
        name: "daikiri",
        img: "../img/daikiri.webp",
        description:"Ron blanco, jugo de limon, frutilla" ,
        price: 4 ,
    },
    {
        id:8 ,
        name: "ginTonic",
        img: "../img/ginTonic.webp" ,
        description:"Gin, agua tonica" ,
        price: 5.50,
    },
]