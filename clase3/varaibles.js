//variables globales
let nombrecompleto=prompt("Ingrese su nombre completo");
function saludar(parametro1){
    console.log("Hola "+parametro1);
}
saludar("Juan"); //Hola Juan, Juan es el parametro que se le pasa a la funcion saludar 

function saludodirecto(){
    alert(nombrecompleto)
}

//variables locales
function sumar(){
    let num1=prompt("Ingrese el primer numero");
    let num2=prompt("Ingrese el segundo numero");
    let resultado= parseInt(num1) + parseInt(num2);
    console.log(resultado); //como variable local, el consolelog va acá adentro de la funcion sumar 
}
function nuevousuario(){
    let nombre=prompt("Ingrese su nombre"); //variable local visible y se usa dentro de esa funcion 
    let apellido=prompt("Ingrese su apellido");
    let edad=prompt("Ingrese su edad");
    let usuario={
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
    console.log(usuario);
}
