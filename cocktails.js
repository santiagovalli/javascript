const productsContainer = document.querySelector("#productsContainer")

function crearCardCoctel(productos){
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
        cardCoctel.querySelector('.btnCarrito').addEventListener("click", ()=> agregarCarrito(product) )
    })
}
crearCardCoctel(products);