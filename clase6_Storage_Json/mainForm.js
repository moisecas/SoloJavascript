const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}
focoEnCampos()

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de ENVIAR"
})

document.addEventListener("submit", (e)=> { //objeto golobal e = evento de submit (submit es el evento) 
    debugger
    e.preventDefault()
    //código que combina objeto literal
    //JSON.Stringity y LocalStorage
    alert("Formulario enviado.")
})
//local storage 
 //metodos 
 /*
 
    1. setItem(clave, valor) - guarda un valor en el localStorage localstorage.setItem("clave", "valor"), espera dos parametros
    2. getItem(clave) - obtiene el valor de una clave, espera un parametro. getItem("clave") y se lo asigno a una variable let valor = localStorage.getItem("clave")
    3. removeItem(clave) - elimina una clave del localStorage
    4. clear() - elimina todo el localStorage
 */

/*
    sessionStorage
    sessionStorage - guarda datos en el navegador, pero solo durante la sesion
    sessionStorage.setItem("prueba", "hola mundo")
    datotemporal = sessionStorage.getItem("prueba") lo asigno a una variable 
    

*/