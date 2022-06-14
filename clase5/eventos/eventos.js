//eventos del raton 
const boton = document.querySelector("#boton")//capturar el contenido de un elemento html 
const btn = document.querySelector("#btn")//capturar el contenido de un elemento html

function cambiarcolor(){
    console.log("click")
    var bg = boton.style.background 
    if(bg == "green"){ //si el color de fondo es azul
        boton.style.background="red" //cambiar el color de fondo a rojo 

    }else{
        boton.style.background="green"  //cambiar el color de fondo a azul 
    }
     //cambiar el color de fondo de un elemento html
    return true //retorno true para que se ejecute la funcion 
}
 //llamo a la funcion cambiarcolor

 //addEventListener, click 
boton.addEventListener("click",function(){
   cambiarcolor() //llamo a la funcion cambiarcolor 
}) 

//Mouse over, al pasar por encima 
boton.addEventListener("mouseover",function(){
    boton.style.background="blue" //cambiar el color de fondo a azul 
}) 

//Mouse out, al salir del elemento
boton.addEventListener("mouseout",function(){
    boton.style.background="green" //CUANDO SALGA DEL BOTÓN CAMBIA A VERDE 
})

