//funciones anonimas 
const sumar = function(numero1, numero2){
    return numero1 + numero2;
}
let resultado3= sumar(10,20); // 30

//arrow functions
const sumar2 = (numero1, numero2) => {    return numero1 + numero2 } //30

//ejemplo arrow function 
const suma = (numero1, numero2) => numero1 + numero2 //arrow function suma 
const resta = (numero1, numero2) => numero1 - numero2 //arrow function resta
const division = (numero1, numero2) => numero1 / numero2
const multiplicar = (numero1, numero2) => numero1 * numero2

do { //do while para que el usuario pueda ingresar un numero mayor a 0
    var numero1 = parseFloat(prompt("Ingrese un numero"))
    var numero2 = parseFloat(prompt("Ingrese otro numero"))
    var operacion = prompt("Ingrese una operacion (+, - , /, *")

    if(isNaN(numero1) || isNaN(numero2)) { //si el usuario no ingresa un numero valido
        alert("Por favor ingrese un numero valido")
    }

    if(numero2 === 0 && operacion == "/") { //si el usuario ingresa 0 en la division
        alert("No se puede dividir entre cero")
    }


} while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion == "/")) //mientras el usuario no ingrese un numero valido o 0 en la division

if(operacion == "+") {
    alert(suma(numero1, numero2)) //invocamos la funcion suma y le pasamos los numeros ingresados por el usuario 
} else if(operacion == "-") {
    alert(resta(numero1, numero2)) //invoca la funcion resta y le pasamos los numeros ingresados por el usuario
} else if(operacion == "/") {
    alert(division(numero1, numero2)) //invoca la funcion division y le pasamos los numeros ingresados por el usuario
} else if(operacion == "*") {
    alert(multiplicar(numero1, numero2)) //invoca la funcion multiplicar y le pasamos los numeros ingresados por el usuario 
} else {
    alert("Operacion no valida")
}
