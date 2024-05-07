const productsContainer = document.querySelector("#productsContainer")

function crearCardCoctel(){
    const productos = JSON.parse(localStorage.getItem("products"))
    productos.forEach(product => {
        const cardCoctel = document.createElement("div")
        cardCoctel.setAttribute("id", "tarjetaCoctel")

        cardCoctel.innerHTML = `
<div id="productoCoctel">
    <img class="coctelImg" src="${product.img}" alt="${product.name}">
    <h4 class="nombreCoctel">${product.name}</h4>
    <h6 class="precioCoctel">Precio: $${product.price}</h6>
        <div class="controladorCarrito">
            <button id="${product.id}" class="btnCarrito">-</button>
            <span class"cantidad"=>0</span>
            <button id="${product.id}" class="btnSumar">+</button>
        </div>
</div>`;
        productsContainer.appendChild(cardCoctel);

        cardCoctel.querySelector('.btnSumar').addEventListener("click", ()=> agregarCarrito(product) )
    })
}
crearCardCoctel(products);