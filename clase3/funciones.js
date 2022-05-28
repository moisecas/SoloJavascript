function sumar (primernumero, segundonumero){
    return primernumero + segundonumero;
}
let resultado= sumar(10,20); // 30 

//funcion calculadora 
function calculadora(numero1, numero2, operacion){
    if(operacion=="suma"){
        return numero1 + numero2;
    }
    if(operacion=="resta"){
        return numero1 - numero2;
    }
    if(operacion=="multiplicacion"){
        return numero1 * numero2;
    }
    if(operacion=="division"){
        return numero1 / numero2;
    }
}
num1=prompt("Ingrese el primer numero");
num2=prompt("Ingrese el segundo numero");
operacion=prompt("Ingrese la operacion");
parseInt(num1);
parseInt(num2);
let resultado2= calculadora(num1, num2,operacion); // 30