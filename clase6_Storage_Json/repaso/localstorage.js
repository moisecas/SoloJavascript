//Localstorage es una variable que se guarda en el navegador

//Guardar datos 
localStorage.setItem("nombre", "Juan"); //clave, valor, metodo setItem para guardar datos en el localStorage 

document.querySelector("#peliculas").innerHTML = localStorage.getItem("nombre"); //metodo getItem para recuperar datos del localStorage

const usuario = {
    nombre: "Juan",
    email: "juan@",
    perfil: "https://www.google.com"

}
localStorage.setItem("usuario", JSON.stringify(usuario)); //convertir el objeto literal a un string y guardarlo en el localStorage  
var usuarios = JSON.parse(localStorage.getItem("usuario")); //recuperar el string del localStorage y convertirlo a un objeto literal 
document.querySelector("#datos").append(usuarios.perfil + " " + usuarios.nombre); //mostrar el perfil y el nombre del usuario 

//borrar datos 
localStorage.removeItem("nombre"); //metodo removeItem para borrar datos del localStorage