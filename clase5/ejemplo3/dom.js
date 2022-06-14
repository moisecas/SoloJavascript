function cambiacolor(color){
    caja.style.background = color;
}

//conseguir elemento por id
const caja = document.getElementById("caja") //capturar el contenido de un elemento html 
caja.style.background = "red" //cambiar el color de fondo de un elemento html 
caja.style.padding = "20px" //cambiar el padding de un elemento html 
caja.style.color = "black" //cambiar el color de un elemento html 
caja.className="hola" //cambiar la clase de un elemento html

console.log(caja)

//conseguir elemento por etiqueta 
const div=document.getElementsByTagName("div") //capturar el contenido de un elemento html
console.log(div) //muestro el contenido del elemento html 

var valor 
for(valor in div){ //itero sobre el array de elementos html
    if(typeof div[valor].textContent=="string"){ //si el valor es un string 
        var parrafo = document.createElement("p") //creo un elemento p para poder agregarle contenido
        var texto = document.createTextNode(div[valor].textContent)  //pinto el contenido del elemento en el html
        parrafo.append(texto)  
        seccion.append(parrafo) //agrego el elemento al id seccion, le paso el elemento html que estoy creando 
        
    }
}


// const contenido = div[1].innerHTML //capturar el contenido de un elemento html
// console.log(contenido) //muestro el contenido del elemento html 




//conseguir elemento por clase 
var rojos = document.getElementsByClassName("rojo") //capturar el contenido de un elemento html, selecciono la clase rojo 
var divs;
for(divs in rojos){
    rojos[divs].style.background = "red" //cambiar el color de fondo de un elemento html, a rojos le paso el elemento divs que estoy iterando 
} //itero sobre el array de elementos html

rojos[0].style.background = "red" //cambiar el color de fondo de un elemento html  
console.log(rojos) //muestro el contenido del elemento html


//Query Selector 
const id = document.querySelector("#encabezado") //capturar el contenido de un elemento html
console.log(id) //muestro el contenido del elemento html
