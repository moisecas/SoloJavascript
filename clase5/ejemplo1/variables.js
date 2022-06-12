const productos = ['Banana', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango']
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const lista = document.getElementsByClassName("orange-text")

const listadoFrutas = document.getElementById("listadoFrutas") //Dentro de este nodo, cargaré los <li> con los productos
const listadoCarrito = document.getElementById("listadoCarrito") //En este otro, los productos a comprar