//NVIDIA GeForce RTX 4060 NVIDIA GeForce RTX 4060Ti NVIDIA GeForce RTX 4070 NVIDIA GeForce RTX 4070 SUPERNVIDIA GeForce RTX 4070 Ti NVIDIA GeForce RTX 4070 Ti SUPER NVIDIA GeForce RTX 4080 NVIDIA GeForce RTX 4080 SUPER NVIDIA GeForce RTX 4090

// const cpuMasters = {

//     procesoCompra: [
//         {
//             texto: "Que tarjeta de video desea compar?",
//             opciones: [ "A| NVIDIA GeForce RTX 4060 $300", "B| NVIDIA GeForce RTX 4070 $600", "C | NVIDIA GeForce RTX 4080 $900", "D| NVIDIA GeForce RTX 4090 $1500"],
//             eleccionGpu: {
//                 primeraGpu: "A",
//                 segundaGpu: "B",
//                 terceraGpu: "C",
//                 cuartaGpu: "D",
//                 comprador: "",

//                 invalido: "No hay respuesta",

//             }
//         },
//         {
//             texto:"Desea realizar la compra de NVIDIA GeForce RTX 4060?","Precio final:$300"

//         },

//         {
//             texto:"Desea realizar la compra de NVIDIA GeForce RTX 4070?","Precio final:$600"
//         },

//         {
//             texto:"Desea realizar la compra de NVIDIA GeForce RTX 4080?","Precio final:$900"
//         },

//         {
//             texto:"Desea realizar la compra de NVIDIA GeForce RTX 4090?","Precio final:$1500"
//         },
//     ]
// }

const catalogoGpu = `Que tarjeta de video desea compar?\n A| NVIDIA GeForce RTX 4060 $300 \n B| NVIDIA GeForce RTX 4070 $600\n C | NVIDIA GeForce RTX 4080 $900\n D| NVIDIA GeForce RTX 4090 $1500`;

const gpuA = " Desea realizar la compra de NVIDIA GeForce RTX 4060? \nPrecio final:$300";

const gpuB = " Desea realizar la compra de NVIDIA GeForce RTX 4070? \nPrecio final:$600";

const gpuC = " Desea realizar la compra de NVIDIA GeForce RTX 4080? \nPrecio final:$900";

const gpuD = " Desea realizar la compra de NVIDIA GeForce RTX 4090? \nPrecio final:$1500";

const textoAclaracion = "\nPor favor solo ingrese A, B, C, D como respuesta, gracias.";

const primerPregunta = prompt(catalogoGpu).toUpperCase()


/*const validarPrimerPregunta = (respuestaPrimerPregunta)=>{
if (primerPregunta === "A") {
    prompt(gpuA);

}
else if (primerPregunta === "B") {
    prompt(gpuB);
}
else if (primerPregunta === "C") {
    prompt(gpuC);
}
else if(primerPregunta === "D") {
    prompt(gpuD);
}

else{
    alert(textoAclaracion);
    primerPregunta()
}
}*/

do {
    primerPregunta = prompt(catalogoGpu).toUpperCase();
    if (primerPregunta !== "A" && primerPregunta !== "B" && primerPregunta !== "C" && primerPregunta !== "D") {
        alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
} while (primerPregunta !== "A" && primerPregunta !== "B" && primerPregunta !== "C" && primerPregunta !== "D");

if (primerPregunta === "A") {
    prompt(gpuA);
} else if (primerPregunta === "B") {
    prompt(gpuB);
} else if (primerPregunta === "C") {
    prompt(gpuC);
} else if (primerPregunta === "D") {
    prompt(gpuD);
}