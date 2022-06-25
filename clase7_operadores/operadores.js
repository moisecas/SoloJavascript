const carrito = []

const nuevoProducto = {id: 1234, nombre: "NOKIA 1100", precio: 45000, stock: 11}

const misProductos = [{id: 1234, descripcion: "NOTEBOOK GAMER 17'", precio: 455000, precioFinal: 550550, stock: 45},
                      {id: 1234, descripcion: "NOTEBOOK GAMER 15'", precio: 400000, precioFinal: 442000, stock: 32},
                      {id: 1234, descripcion: "MACBOOK AIR 13'", precio: 221200, precioFinal: 280000, stock: 21},
                      {id: 1234, descripcion: "LENOVO IDEAPAD 14'", precio: 189000, precioFinal: 228690, stock: 51},
                      {id: 1234, descripcion: "IPAD PRO 12'", precio: 450000, precioFinal: 544500, stock: 12},]

const operadorTernario = ()=> { //SIN OPERADOR TERNARIO
    debugger
    let usuario = prompt("Identifíquese:")
        if (usuario === "Coderhouse") {
            console.log(`Bienvenid@ ${usuario}`)
        } else {
            console.warn(`No se reconoce el usuario ${usuario}`)
        }
}

const operadorLogicoAnd = ()=> { //SIN OPERADOR LÓGICO AND
    debugger
    if (carrito.length === 0) {
        alert("🛒 El carrito se encuentra vacío.")
    }
    //carrito.length === 0 && alert("🛒 El carrito se encuentra vacío.")
}

const operadorLogicoOr = ()=> { //SIN OPERADOR LÓGICO OR
    debugger
    carritoNuevo = JSON.parse(localStorage.getItem("miCarrito"))
    //debería generar un par de IF (o un IF elaborado) antes de iterarlo (if=null, if=undefined, if="", if=[])
    //para mostrar los elementos en pantalla
    console.table(carritoNuevo)
}

const accesoCondicional = ()=> {//SIN ACCESO CONDICIONAL
    debugger
    console.log(nuevoProducto.nombre + " - " + nuevoProducto.id)
    console.log(nuevoProducto.precioFinal)
}

const plantillaHTML = (producto)=> { //genera una plantilla HTML con los datos que necesitamos de un objeto 
        return `<li class="collection-item">
                    ${producto.descripcion}
                    <a href="#!" class="secondary-content blue-text">$ ${producto.precioFinal.toLocaleString()}</a>
                </li>` //producto.precioFinal.toLocaleString() convierte el número a string con el formato de moneda
}

const desestructurar = ()=> { //permite acceder a los datos de un objeto
    const ul = document.querySelector("ul") //seleccionar el elemento ul
    console.table(misProductos) //muestra el array completo
    debugger
    for (producto of misProductos) { //iterar sobre un array 
        ul.innerHTML += plantillaHTML(producto) //agregar un elemento a una lista
    }
}