alert("js.js");
const productos = ['Banana', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango'] //array de productos contenido de la función cargar productos 
const prueba = document.getElementsByClassName("orange-text") //Array de elementos de la clase orange-text 

const titulo = document.getElementById("titulo") 
const listadofrutas=document.getElementById("listadoFrutas") //guardo el contenido del id al cual me quiero conectar 
const num1 = document.getElementById("primer")
const num2 = document.getElementById("segundo") //Para obtener el valor de un input 
const suma = num1.value + num2.value //Para sumar los valores de los inputs 
const div = document.getElementsByTagName("div") 

//mostrar en html el resultado de la suma  
document.getElementById("sumar").innerText = suma //Para mostrar el resultado en el html 

titulo.innerText = "FRUTA.COM" //Para cambiar el texto del titulo 
div[1].innerHTML = "<h1>Ecommerce de alimentos saludables</h1>"

function cargarproductos(){ //ejecuto
    //recorrer listado de productos
    listadofrutas.innerHTML = "" //limpiar el contenido del id listadoFrutas, vaciarlo para poder agregarle mas contenido sin que se repita, vacio  
    for(elemento of productos){ //van a quedar capturados en el elemento para pintarlos en el html, itero sobre el array de productos, se graba en elememtno
        const liProductos = document.createElement("li") //creo un elemento li para poder agregarle contenido 
            liProductos.id = "2022" + elemento //accedo a su propiedad id y le asigno un valor concatenando un valor que se va a repetir en cada elemento
            liProductos.className = "red-text" //accedo a su propiedad className y le asigno un valor
            liProductos.innerText = elemento //pinto el contenido del elemento en el html
            listadofrutas.append(liProductos) //agrego el elemento al id listadoFrutas, le paso el elemento html que estoy creando 
        //listadofrutas.innerHTML += "<li class='orange-text'>"+elemento+"</li>"  //armo el html y le concateno el elemento del array con los productos guardados en la variable productos             
    }
    //l="<li class='orange-text'>"
}
cargarproductos() //llamo a la función  

