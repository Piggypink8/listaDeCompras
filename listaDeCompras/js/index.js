const inputProducto = document.querySelector(".inputProducto");
const listaProductos = document.querySelector(".listaProductos");
const agregarProducto = document.querySelector(".agregarProducto");

agregarProducto.addEventListener("click", agregarNuevoProducto);

function agregarNuevoProducto() {

    const itemNombre = inputProducto.value

    const nuevoProductoContenedor = document.createElement('div')

    const nuevoProductoContenido = `              
    <div class="producto">
        <p class="nombreProducto">${itemNombre}</p>
        <div class="buttons">
            <button class="check" onclick="checkear(event)">✔</button>
            <button class="delete" onclick="borrar(event)">✖</button>
        </div>
    </div>`

    nuevoProductoContenedor.innerHTML = nuevoProductoContenido

    listaProductos.append(nuevoProductoContenedor)
   
    console.log("Se agregó el producto: " + itemNombre);

    inputProducto.value = ""
}



function checkear(event){

    const btn = event.target;

    const item = btn.closest(".producto");

    const itemNombre = item.querySelector(".nombreProducto").textContent;

    item.classList.toggle('completed');

    console.log("Se compró el producto: " + itemNombre);
}

function borrar(event) {
    
    // Seleccionamos elemento del botón presionado.
    const btn = event.target;

    // Agarramos al padre más cercano del botón presionado.
    const item = btn.closest(".producto");

    // Tomamos el valor (nombre) del producto que deseamos borrar.
    const itemNombre = item.querySelector(".nombreProducto").textContent;

    // Imprimimos el nombre del producto que vamos a borrar para saber que es el producto correcto.
    console.log("Se eliminó el producto: " + itemNombre);

    // Eliminamos el contenedor padre del elemento(producto) para sacarlo de la lista de compras.
    btn.closest(".producto").remove();
}
