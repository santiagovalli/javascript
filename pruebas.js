//NVIDIA GeForce RTX 4060 NVIDIA GeForce RTX 4060Ti NVIDIA GeForce RTX 4070 NVIDIA GeForce RTX 4070 SUPERNVIDIA GeForce RTX 4070 Ti NVIDIA GeForce RTX 4070 Ti SUPER NVIDIA GeForce RTX 4080 NVIDIA GeForce RTX 4080 SUPER NVIDIA GeForce RTX 4090

// const cpuMasters


/*const catalogoGpu = `Que tarjeta de video desea compar?\n A| NVIDIA GeForce RTX 4060 $300 \n B| NVIDIA GeForce RTX 4070 $600\n C | NVIDIA GeForce RTX 4080 $900\n D| NVIDIA GeForce RTX 4090 $1500`;

const gpuA = " Desea realizar la compra de NVIDIA GeForce RTX 4060? \nPrecio final:$300";

const gpuB = " Desea realizar la compra de NVIDIA GeForce RTX 4070? \nPrecio final:$600";

const gpuC = " Desea realizar la compra de NVIDIA GeForce RTX 4080? \nPrecio final:$900";

const gpuD = " Desea realizar la compra de NVIDIA GeForce RTX 4090? \nPrecio final:$1500";

const finalizarCompra = "Felicidades su compra se ha realizado con exito";

const textoAclaracion = "\nPor favor solo ingrese A, B, C, D como respuesta, gracias.";

const primerPregunta = prompt(catalogoGpu).toUpperCase()


const validarPrimerPregunta = (respuestaPrimerPregunta)=>{
if (primerPregunta === "A") {
    confirm(gpuA);

}
else if (primerPregunta === "B") {
    confirm(gpuB);
}
else if (primerPregunta === "C") {
    confirm(gpuC);
}
else if(primerPregunta === "D") {
    confirm(gpuD);
}

else{
    alert(textoAclaracion);

}
}

validarPrimerPregunta()

 const compraFinalizada = (finalCompra)=>{
     if (validarPrimerPregunta === confirm){
        alert(finalizarCompra)
     }
 }*/


 let loop = true
while (loop) {

    Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")


    if (Bienvenida) {


        //arrays
        const procesoCompra = [
            {
                pregunta: ["Que tarjeta de video desea compar?"],
                opciones: ["A | NVIDIA GeForce RTX 4060 $300", "B | NVIDIA GeForce RTX 4070 $600", "C | NVIDIA GeForce RTX 4080 $900", "D | NVIDIA GeForce RTX 4090 $1500"],
                respuestas: ["A", "B", "C", "D"]
            },
            {
                gpuOpciones: [
                    "Desea realizar la compra de NVIDIA GeForce RTX 4060? \nPrecio final:$300", " Desea realizar la compra de NVIDIA GeForce RTX 4070? \nPrecio final:$600", " Desea realizar la compra de NVIDIA GeForce RTX 4080? \nPrecio final:$900", " Desea realizar la compra de NVIDIA GeForce RTX 4090? \nPrecio final:$1500",
                ]
            },
            {
                textoAclaracion: [
                    "\nPor favor solo ingrese A, B, C, D como respuesta, gracias."
                ],
                finalizarCompra: [
                    "Felicidades su compra se ha realizado con exito"
                ]
            }
        ]

        function inciarCompra(){
            const catalogo = prompt( procesoCompra.pregunta)
        }
    }
    
        inciarCompra();


    
    /*else {
        alert("Felicidades su compra se ha realizado con exito")
    }*/
}