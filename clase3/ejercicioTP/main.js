//simulador de credito 
const nombre = prompt("Ingrese su nombre");
alert(`Hola ${nombre}`); //concatenacion de string 

function credito(monto, plazo, interes) {
    let intereses = monto * (interes / 100);
    let total = monto + intereses;
    let cuota = total / plazo;
    //return `El monto total a pagar es ${total} y la cuota mensual es ${cuota}`;
    alert(nombre + ' su cuota es de ' + cuota); 
}
let monto = parseInt(prompt("Ingrese el monto que necesita para su crédito"));
let plazo = parseInt(prompt("Ingrese el plazo en el que desea pagarlo"));
let interes = parseInt(prompt("Ingrese el interés que le asigno el asesor"));
credito(monto, plazo, interes);



