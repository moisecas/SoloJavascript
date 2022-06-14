//eventos teclado 

//focus
const input = document.querySelector("#nombre")
input.addEventListener("focus",function(){
    console.log("focus")
}) //cuando se presione el input

//blur 

input.addEventListener("blur",function(){
    console.log("focus")
}) //cuando sale del input 


//keydown 
input.addEventListener("keydown",function(event){
    console.log("keydown", String.fromCharCode(event.keyCode)) //muestro el codigo de la tecla presionada x consola 
})//cuando se presione una tecla



//keypress 
input.addEventListener("keypress",function(event){
    console.log("keypress", String.fromCharCode(event.keyCode)) //muestro el codigo de la tecla presionada x consola 
})//cuando se presione una tecla 



//keyup