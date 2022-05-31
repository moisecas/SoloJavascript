//simulador de credito 
const nombre = prompt("Ingrese su nombre");
alert(`Hola ${nombre}`); //concatenacion de string 

function credito(monto, plazo, interes) {
    let intereses = monto * (interes / 100);
    let total = monto + intereses;
    let cuota = total / plazo;
    //return `El monto total a pagar es ${total} y la cuota mensual es ${cuota}`;
    alert('su cuota es de ' + cuota); 
}
credito(100000,12,5); //llamada a la funcion  credito  
console.log(credito(100000,12,5)); //llamada a la funcion  credito