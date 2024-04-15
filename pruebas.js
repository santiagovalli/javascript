//NVIDIA GeForce RTX 4060 NVIDIA GeForce RTX 4060Ti NVIDIA GeForce RTX 4070 NVIDIA GeForce RTX 4070 SUPERNVIDIA GeForce RTX 4070 Ti NVIDIA GeForce RTX 4070 Ti SUPER NVIDIA GeForce RTX 4080 NVIDIA GeForce RTX 4080 SUPER NVIDIA GeForce RTX 4090

// const cpuMasters

let loop = true
while (loop) {
    Bienvenida = confirm("Bienvenido a CPUMarters, las mejores tarjetas graficas del mercado a el mejor precio. \nDesea ver nuestro catalogo?")

    if (Bienvenida) {
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

        function inciarCompra() {
            return prompt(procesoCompra[0].pregunta[0] + '\n' + procesoCompra[0].opciones.join('\n')).toUpperCase
        }

        //let respuestaUsuario = inciarCompra();
        function ejecutarCompra() {
            if (inciarCompra() === procesoCompra[0].respuestas){
            prompt(procesoCompra[0].gpuOpciones)
            }
        
        };

        ejecutarCompra()

    }
    else(
        alert("gracias por visitarnos, vuelva por visitarnos vuelva pronto.")
    )

}
//hola profes, esta preentrega me gano, no puedo de ejecutar lo que tengo en la mente, mi idea era relizar una mini compra donde se muestran las diferentes gpus con sus precios, que el usuario eliga la opcion correspordiente y que luego salga un confirm donde el usuario confirme que quiere comprar la tarjeta que selecciono y por ultimo un mensaje donde diga que la compra se ha realizado con exito, haciendolo sin arrays pude lograrlo, pero cuando trate escribir nuevamente el codigo con arrays se me hizo imposible, les pido perdon si el codigo que escribi es horroroso, es lo mejor que pude hacer, les agradeceria cualquier tipo de ayuda y consejo para saber cuales son mis errores.