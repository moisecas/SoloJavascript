function calculadora(){
    debugger
    let num1=prompt("Ingrese el primer numero");
    let num2=prompt("Ingrese el segundo numero");
    let operacion=prompt("Ingrese la operacion");
    let resultado= realizarCalculo(num1, num2,operacion);
    console.log(resultado); 
}
function realizarCalculo(num1, num2, operacion){
switch(operacion){
    case "suma":
        return (parseInt(num1 + num2)); //si es suma vamos a retornar la suma de los dos numeros 
    case "resta":
        return (parseInt(num1 - num2)); //si es resta vamos a retornar la resta de los dos numeros
    case "multiplicacion":
        return (parseInt(num1 * num2)); //si es multiplicacion vamos a retornar la multiplicacion de los dos numeros
    case "division":
        return (parseInt(num1 / num2)); //si es division vamos a retornar la division de los dos numeros
    default:
        return "No se puede realizar la operacion";
        
    }
}
calculadora(); 