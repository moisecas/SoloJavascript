
titulo.innerText = "MANDAFRUTA.COM"
slogan.innerText = "Tu Ecommerce favorito de alimentos saludables"

const cargarProductos = ()=> { //Usen el DEBUGGER para seguir el código paso a paso
    listadoFrutas.innerHTML = ""
    for (fruta of productos) {
        const liProductos = document.createElement("li")
                liProductos.className = "collection-item"
                liProductos.innerText = fruta
                //lo vemos con EVENTOS
                liProductos.addEventListener("click", ()=> {
                    agregarAlCarrito(`${liProductos.innerText}`)
                })
                listadoFrutas.append(liProductos)
            }
}

// SI QUEREMOS CREAR LOS ELEMENTOS HTML DE FORMA DINAMICA
const agregarAlCarrito = (prod)=> { //Usen el DEBUGGER para seguir el código paso a paso
    if (prod > "") {
        const id = prod + "enCarrito" //ID dinámico, para operar desde JS
        const liCarrito = document.createElement("li")
              liCarrito.className = "collection-item italica-carrito"
              liCarrito.innerText = prod
              liCarrito.id = id
              //Lo vemos con EVENTOS
              liCarrito.addEventListener("dblclick", ()=> {
                  eliminarDelCarrito(`${id}`)
              })
              listadoCarrito.append(liCarrito)
    }
}

//Para crear la opción de eliminar del carrito, debemos generar un ID dinámico
//al momento de crear un <li> por cada producto agregado al Carrito.
const eliminarDelCarrito = (productoID)=> { //Usen el DEBUGGER para seguir el código paso a paso
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
              itemAeliminar.remove()
              return
    }
}

//CARGAR LISTADO DE PRODUCTOS AL INGRESAR A LA PÁGINA
cargarProductos()