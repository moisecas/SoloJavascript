const productos = ['Banana', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango']
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const lista = document.getElementsByClassName("orange-text")
const div = document.getElementsByTagName("div") 

const listadoFrutas = document.getElementById("listadoFrutas") //Dentro de este nodo, cargaré los <li> con los productos
const listadoCarrito = document.getElementById("listadoCarrito") //En este otro, los productos a comprar

titulo.innerText = "FRUTA.COM" //Para cambiar el texto del titulo
slogan.innerText = "Ecommerce de alimentos saludables" //Para cambiar el texto del slogan 
div[1].innerHTML = "<h1>Ecommerce de alimentos saludables</h1>" //Para agregar texto dentro del div 

// innerHeight.html Para obtener algo o pintar algo en el html 