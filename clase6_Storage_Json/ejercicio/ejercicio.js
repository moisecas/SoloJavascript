
const formulario = document.querySelector("#formpeliculas"); //metodo getItem para recuperar datos del localStorage
formulario.addEventListener("submit", function(){ //evento submit para guardar los datos del formulario en el localStorage
    
    const titulo = document.querySelector("#addpelicula").value; //limpiar el contenido del div
    
    if(titulo.length>=1){ //si el titulo es mayor o igual a 1
        localStorage.setItem(titulo, titulo); //guardar el titulo en el localStorage, guardo variable variable para guardar el titulo y el valor del titulo
    }

})

//mostrar los datos del localStorage en el div 

var ul = document.querySelector("#ilpeliculas");
for(var i in localStorage){

    console.log(localStorage.getItem(i)); //recuperar los datos del localStorage 
    if(typeof localStorage[i]==="string"){ //si el dato es un string
        var li = document.createElement("li"); //creo un elemento li
        li.append(localStorage.getItem(i)); //agrego el titulo de cada pelicula al elemento li
        ul.append(li); //agrego el elemento li al elemento html que contiene el array de objetos json
    }
    
}  

const formulariob = document.querySelector("#formBorrarpeliculas"); //metodo getItem para recuperar datos del localStorage
formulariob.addEventListener("submit", function(){ //evento submit para guardar los datos del formulario en el localStorage
    
    const titulo = document.querySelector("#borrarPelicula").value; //limpiar el contenido del div
    
    if(titulo.length>=1){ //si el titulo es mayor o igual a 1
        localStorage.removeItem(titulo); //eliminar el titulo del localStorage
    }

})

