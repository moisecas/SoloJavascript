//simulador de credito 
const nombre = document.getElementById("nombre"); 
console.log(nombre); //muestro el nombre del interesado 

 

function credito(monto, plazo, interes){
    
    let intereses = monto * (interes / 100);
    let total = monto + intereses;
    let cuota = total / plazo;
    //return `El monto total a pagar es ${total} y la cuota mensual es ${cuota}`;
    document.getElementById("resultado").innerHTML = `El monto total a pagar es ${total} y la cuota mensual es ${cuota}`;  //muestro el monto total a pagar y la cuota mensual
}
var monto = document.getElementById("cantidad").value;
var plazo = document.getElementById("plazo").value; //plazo en meses
var interes = document.getElementById("interes").value; //interes en porcentaje
credito(monto, plazo, interes);

 




