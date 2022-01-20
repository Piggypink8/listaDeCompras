const inputProduct = document.querySelector(".input")
const submitBtn = document.querySelector(".submitBtn")
const listProducts = document.querySelector(".list-products")


submitBtn.addEventListener("click", addProduct)

function addProduct() {

    if(inputProduct.value == " " || inputProduct.value == "") { return }

    nameProduct = inputProduct.value
    
    addNewDiv = document.createElement("div")
    addNewDiv.classList.toggle("product")

    const addNewContent = `
            <h4 class="name">${nameProduct}</h4>
                <div class="buttons">
                    <button class="check" onclick="checkProduct(event)"><i class="fas fa-check"></i></button>
                    <button class="delete" onclick="deleteProduct(event)"><i class="far fa-trash-alt"></i></button>
                </div>
    `

    addNewDiv.innerHTML = addNewContent

    listProducts.append(addNewDiv)

    inputProduct.value = ""
    
    console.log(`Se agrego el producto ${nameProduct}`)
}

function deleteProduct(event){

    const deleteBtn = event.target

    const item = deleteBtn.closest(".product")

    const productName = item.querySelector(".name").textContent

    console.log(productName)

    deleteBtn.closest(".product").remove()

}


function checkProduct(event){
    
    const checkBtn = event.target

    const item = checkBtn.closest(".product")

    const productName = item.querySelector(".name").textContent

    console.log(productName)

    item.classList.toggle("checked")
}

    // Seleccionamos elemento del botón presionado.


    // Agarramos al padre más cercano del botón presionado.


    // Tomamos el valor (nombre) del producto que deseamos borrar.
  

    // Imprimimos el nombre del producto que vamos a borrar para saber que es el producto correcto.


    // Eliminamos el contenedor padre del elemento(producto) para sacarlo de la lista de compras.

