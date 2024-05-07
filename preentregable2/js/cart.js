const productsContainer = document.querySelector("#productsContainer")
const unidadesElement = document.querySelector("#unidades")
const precioElement = document.querySelector("#precio")
const totalesElement = document.querySelector("#totales")
const carritoVacioElement = document.querySelector("#carritoVacio")
const reiniciarCarritoElement = document.querySelector("#reiniciarCarrito")

function crearCardCoctel() {
    productsContainer.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("products"))

    if (productos && productos.length > 0) {
        productos.forEach((product) => {
            const cardCoctel = document.createElement("div")
            cardCoctel.setAttribute("id", "tarjetaCoctel")

            cardCoctel.innerHTML = `
<div id="productoCoctel">
    <img class="coctelImg" src="${product.img}" alt="${product.name}">
    <h4 class="nombreCoctel">${product.name}</h4>
    <h6 class="precioCoctel">Precio: $${product.price}</h6>
        <div class="controladorCarrito">
            <button id="${product.id}" class="btnRestar">-</button>
            <span class"cantidad"=>${product.cantidad}</span>
            <button id="${product.id}" class="btnSumar">+</button>
        </div>
</div>`;
            productsContainer.appendChild(cardCoctel);

            
            cardCoctel.querySelector('.btnSumar').addEventListener("click", (e) => {
                
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarCarrito(product) ;
                actualizarTotales();
            });

            cardCoctel.querySelector('.btnRestar').addEventListener("click", (e) => {
                restarCarrito(product);
                crearCardCoctel();
                actualizarTotales();
                
            })

        })

    }

}
crearCardCoctel();
actualizarTotales();

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("products"));

    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            precio += producto.price * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    mensajeCarritoVacio()
}

function mensajeCarritoVacio(){
    const productos = JSON.parse(localStorage.getItem("products"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0 );
    totalesElement.classList.toggle("escondido", !(productos && productos.length > 0 ));
}

mensajeCarritoVacio();


reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("products");
    actualizarTotales();
    crearCardCoctel();
}