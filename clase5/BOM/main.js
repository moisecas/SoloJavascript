//BOM browser object model, trabajar con el navegador
console.log(window.innerHeight)//muestro la altura de la ventana
console.log(window.innerWidth)//muestro la anchura de la ventana

function getboom(){
    console.log(window.innerHeight)//muestro la altura de la ventana
    console.log(window.innerWidth)//muestro la anchura de la ventana
}
getboom() //llamo a la funcion getboom 

console.log(screen.width)//muestro la anchura de la pantalla
console.log(screen.height)//muestro la altura de la pantalla 
console.log(window.location)//muestro la ubicacion de la pagina 

function redirect(url){
    window.location.href = url //redirecciono a la url que le paso por parametro, cambiarmos el href de la pagina 
}
redirect("https://www.google.com") //redirecciono a la url que le paso por parametro

function abrirventana(url){
    window.open(url) //abro una ventana nueva con la url que le paso por parametro
}
abrirventana("https://www.google.com") //abro una ventana nueva con la url que le paso por parametro

