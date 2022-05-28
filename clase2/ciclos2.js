//bucles 
//ejemplo 1 
let i=0;
while (i<10) { //mientras sea menor a 10
    console.log(i);//imprime el valor de i 
    i++;
} 

//ejemplo for 
for (let i=0; i<10; i++) { //i inicia en 0 y se va incrementando en 1 hasta que i sea menor a 10
    console.log(i);
}//va a mostrar los numeros del 0 al 9 


//ejemplo 2
let jugador;

for (let i = 0; i <= 11; i++) {

    jugador = prompt("Ingrese el nombre del jugador");
    console.log("El jugador " + jugador + " esta en la posicion " + i);
}

//while
let a=0;
while (a<10) {
    console.log(a);
    a++;
}

// do while
let acumulador = 0;
let cantNotas = 0;

do {
    let nota = parseInt(prompt("Ingrese una nota"))
    if(nota >= 1 && nota <=10) {
        acumulador += nota  
        cantNotas++; 
    } else {
        alert("Nota no valida")
    }

    var continua = prompt("¿Desea ingresar otra nota?").toLowerCase() //No, NO, no, nO

} while(continua != "no")

alert(`El promedio es ${acumulador / cantNotas}`)

//switch 
let mes = prompt("Ingrese el mes");
switch (mes) {
    case "enero":
        console.log("Enero tiene 31 días");
        break;
    case "febrero":
        console.log("Febrero tiene 28 días");
        break;
    case "marzo":
        console.log("Marzo tiene 31 días");
        break;
}

//calculadora 
let numero1, numero2, operacion;

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+, - , /, *)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese unos numeros validos")
    }
} while(isNaN(numero1) || isNaN(numero2)) 

switch (operacion) {
    case "+":
        alert(`El resultado de la suma es: ${numero1 + numero2}`)
        break
    case "-":
        alert(`El resultado de la resta es: ${numero1 - numero2}`)
        break
    case "/":
        alert(`El resultado de la division es: ${numero1 / numero2}`)
        break
    case "*":
        alert(`El resultado de la multiplicacion es: ${numero1 * numero2}`)
        break
    default:
        alert("No ingreso una operacion valida")
        break
}

//ejemplo 3 
let color = prompt("Ingrese un color"); 
color.toLocaleLowerCase(); //convierte a minusculas 
switch (color) {
    case "rojo":
        console.log("Si hay rojo, hay mucho rojo");
        break;
    case "verde":
        console.log("Si hay verde, hay mucho verde");
        break;
    case "azul":
        console.log("Si hay azul, hay mucho azul");
        break;
    case "amarillo":
        console.log("No hay mucho amarillo");
        break;
    

    default:
        break;
}



