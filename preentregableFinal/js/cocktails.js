

fetch("../jsonFiles/productos.json")
.then(res =>res.json())
.then(datos => crearCardCoctel(datos))

const productsContainer = document.querySelector("#productsContainer")

//funcion para crear las cartas de cocteles en cocktails.html
function crearCardCoctel(productos) {
    productos.forEach(product => {
        const cardCoctel = document.createElement("div")
        cardCoctel.setAttribute("id", "tarjetaCoctel")

        cardCoctel.innerHTML = `
<div id="productoCoctel">
    <img class="coctelImg" src="${product.img}" alt="${product.name}">
    <h4 class="nombreCoctel">${product.name}</h4>
    <h5 class="descripcionCoctel">ingredientes: ${product.description}</h5>
    <h6 class="precioCoctel">Precio: $${product.price}</h6>
    <button id="${product.id}" class="btnCarrito">Agregar al carrito</button>
</div>`;
        productsContainer.appendChild(cardCoctel);
        cardCoctel.querySelector('.btnCarrito').addEventListener("click", () =>{
          agregarCarrito(product),


          //aplicacion de libreria toastify
          Toastify({
            text: "Agregado",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "radial-gradient(circle, #ab4493 0%, #ada5ac 100%)",
              border: "#0e0e0e 1px solid",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        } )
    })
}