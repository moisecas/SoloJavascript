//control de flujos ciclos e iteraciones 
// let nombre = "Juan"; 
// let respuesta=(1==1)?"verdadero":"falso"; // == igualdad === identidad
// console.log(respuesta);

let username = prompt("Ingrese su nombre"); 
if (username == "juan") {
    console.log("Bienvenido", username);
    alert("Bienvenido", username);
} else {
    console.log("Usuario no registrado");
    console.warn("Usuario no registrado"); //parara alertas de advertencia por la consola del navegador 

    alert("Usuario no registrado");
    
}

//condiciones anidadas o encadenadas 
let mioferta = parseInt(prompt("Ingrese su oferta")); //por acá ingres el numero como string y se convierte a entero con parseint 
if (mioferta > 1000) {
    console.log("Usted ganó una tarjeta de regalo");
} else if (mioferta > 500) {
    console.log("Usted ganó una camisa");
} else if (mioferta > 100) {
    console.log("Usted ganó una pantalon");
} else {
    console.log("Usted no ganó nada");
}

//true o false 
let edad = parseInt(prompt("Ingrese su edad")); 
let esmayor = edad > 18;
console.log(esmayor); 

let respuesta = confirm("¿Esta seguro de formatear?"); //confirma si se desea continuar true o false 
if (respuesta == true) { //si es true 
    console.log("Formateando...");
}else{ //si es false 
    console.log("Cancelado");
}

//ejempplo 2
let username2 = prompt("Ingrese su nombre"); 
if (username2 == "juan") {
    console.log("Bienvenido", username2);
    alert("Bienvenido", username2);
} else {
    console.log("Usuario no registrado");
    console.warn("Usuario no registrado"); //para alertas de advertencia por la consola del navegador 

    alert("Usuario no registrado");
    
} 

//condiciones compuestas 
let nombre=prompt("Ingrese su nombre");
let apellido=prompt("Ingrese su apellido");
if (nombre!="" && apellido!="") { //si no esta vacio 
    console.log("Bienvenido", nombre, apellido);
}else{
    console.log("Usuario no registrado");
} 

//ejeemplo 3 
let nombreuser=prompt("Ingrese su nombre");
let pass=prompt("Ingrese contraeña");
let fingerprint=true //por defecto es true, identificación de huella digital 
if (nombreuser===nombreuser && pass===pass || fingerprint===true) { //si coincide el nombre y la contraseña o si esta activado el fingerprint 
    console.log("Bienvenido", nombreuser);
}else{
    console.log("Usuario no registrado");
}





 



