//simulador de credito 
const nombre = document.getElementById("usuario"); 
console.log(nombre); //muestro el nombre del interesado 

//funcion para verificar los campos obligatorios
function validar(){
    let interes = document.getElementById("interes").value;
    let cantidad = document.getElementById("cantidad").value;
    let plazo = document.getElementById("plazo").value;
   if(interes == "" || cantidad == "" || plazo == ""){
       alert("Todos los campos son obligatorios");
       return false;
   }
 

    return true;//si no falta ningun dato, se ejecuta la función
}
 

function credito(monto, plazo, interes){
    
    let intereses = monto * (interes / 100);
    let total = monto + intereses;
    let cuota = total / plazo;
    //return `El monto total a pagar es ${total} y la cuota mensual es ${cuota}`;
    document.getElementById("resultado").innerHTML = `El monto total a pagar es ${total} y la cuota mensual es ${cuota}`;  //muestro el monto total a pagar y la cuota mensual
}
let monto = document.getElementById("cantidad");
let plazo = document.getElementById("plazo"); //plazo en meses
let interes = document.getElementById("interes"); //interes en porcentaje

let btn = document.getElementById("submit"); //boton para calcular el credito 
btn.addEventListener("click", () => {
     credito(monto.value, plazo.value, interes.value);
      
}) 

function mostrardatos(usuario,razon,cantidad,plazo2){
    document.getElementById("datos").innerHTML = `El usuario ${usuario} con motivo de credito ${razon} solicita un credito de ${cantidad} con un plazo de ${plazo2} meses`;
}
let usuario = document.getElementById("usuario");
let razon = document.getElementById("razon");
let cantidad = document.getElementById("cantidad");
let plazo2 = document.getElementById("plazo");

let btn2 = document.getElementById("btn2"); //boton mostrar datos
btn2.addEventListener("click", () => {
     mostrardatos(usuario.value, razon.value, cantidad.value, plazo2.value);
}) 

const email = document.getElementById("email"); //evento enter para validar el email
document.addEventListener("keypress", () => {
    console.log(email.value); 
if (email.value != ""){
    document.getElementById("solicitud").innerHTML = `Solicitud recibida ${email.value}`;
    }
})

   







