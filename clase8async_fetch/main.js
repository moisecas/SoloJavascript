
const preloader = document.querySelector('.preloader');

//mostrar mensaje en el div de preloader
function mostrarMensaje(mensaje) {
    let div = document.createElement('principal');
    div.classList.add('mensaje');
    div.innerHTML = mensaje;
    preloader.appendChild(div);
}
mostrarMensaje('Cargando...'); 

//setinterval console, cada tiempo ejecuta algo (milisegundos)
setInterval(() => {
    console.log('Cargando...'); //cada 5 segundos se ejecuta la funcion
},5000)

//settimeout console, luego de tiempo ejecuta algo (milisegundos)
setTimeout(() => {
    console.log('Cargado'); //en el segundo 2 se ejecuta la funcion
},2000)

//escribir en el html cada cada 5 segundos
setInterval(() => {
    document.getElementById('mensaje').innerHTML = 'Cargando...';
},3000) 


