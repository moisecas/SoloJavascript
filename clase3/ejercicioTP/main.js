//simulador de credito 
const nombre = document.getElementById("usuario"); 
console.log(nombre); //muestro el nombre del interesado 

 

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

let btn = document.getElementById("btn"); //boton para calcular el credito 
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

//guardar datos en local storage

const inputNombre = document.querySelector("#usuario");
const inputPerfil = document.querySelector("#basic-url");
const inputEmail = document.querySelector("#email");

document.addEventListener("submitform", (e)=>{
    e.preventDefault();
    guardardatosdeusuario();
    alert("Datos guardados satisfactoriamente"); 
});



function guardardatosdeusuario() { //recupera la información del formulario y la guarda en el localStorage
    const datosdeusuario={ //objeto literal
        nombre: inputNombre.value,
        perfil: inputPerfil.value,
        email: inputEmail.value
    }
    const datosdeusuarioJSON = JSON.stringify(datosdeusuario) //convertir el objeto literal a un string
    localStorage.setItem(datosdeusuarioJSON,datosdeusuarioJSON) 
}




//usuario, razón del credito, cantidad solicitada y plazo en meses 




