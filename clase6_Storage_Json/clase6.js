function cargarProductos() {
    //debugger
    listadoFrutas.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto
              li.id = producto + "Prod"
              li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
              listadoFrutas.append(li)
    }
}

cargarProductos()

function agregarAlCarrito(prod) {
    if (prod.trim() !== "") {
        carrito.push(prod) //debajo de esto debería guardar el carrito
        const liNuevoProducto = document.createElement("li")
              liNuevoProducto.className = "collection-item blue-text"
              liNuevoProducto.innerText = prod
              liNuevoProducto.id = prod + "EnCarrito"
              liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
              listadoCarrito.append(liNuevoProducto)
    }
}

function removerDelCarrito(prod) {
    debugger
    const productoAremover = document.getElementById(`${prod}`)
          productoAremover.remove()
          console.warn(`${prod} ha sido eliminado del carrito.`)
}