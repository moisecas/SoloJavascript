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
    guardardatosdeusuario()
    //código que combina objeto literal
    //JSON.Stringity y LocalStorage
    alert("Formulario enviado.")
})
//local storage 
 //metodos 
 /*
 
    1. setItem(clave, valor) - guarda un valor en el localStorage localstorage.setItem("clave", "valor"), espera dos parametros
    2. getItem(clave) - obtiene el valor de una clave, espera un parametro. getItem("clave") y se lo asigno a una variable let valor = localStorage.getItem("clave")
    3. removeItem(clave) - elimina una clave del localStorage - localStorage.removeItem("clave")
    4. clear() - elimina todo el localStorage - localStorage.clear() 
 */

/*
    sessionStorage
    sessionStorage - guarda datos en el navegador, pero solo durante la sesion
    sessionStorage.setItem("prueba", "hola mundo")
    datotemporal = sessionStorage.getItem("prueba") lo asigno a una variable 
    

*/

function guardardatosdeusuario() { //recupera la información del formulario y la guarda en el localStorage
    const datosdeusuario={ //objeto literal
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        email: inputEmail.value
    }
    //formato json, stringify - convierte un objeto literal a un string
    const datosdeusuarioJSON = JSON.stringify(datosdeusuario) //convertir el objeto literal a un string
    localStorage.setItem("datosusuario",datosdeusuarioJSON) //guarda el objeto en el localStorage en formato json
    // let nombre = inputNombre.value
    // let telefono = inputTelefono.value
    // let email = inputEmail.value
    // localStorage.setItem("nombre", nombre) //guardo en el localStorage
    // localStorage.setItem("telefono", telefono)
    // localStorage.setItem("email", email)


}

function recuperodatosususario() { //recupero los datos del localStorage 
    if(localStorage.getItem("datosusuario")) { //si el localStorage tiene datos de "datosusuario"
        const datosdeusuario=JSON.parse(localStorage.getItem("datosusuario")) //convertir el string a un objeto
        

            inputNombre.value = datosdeusuario.nombre //recupero el valor de la clave nombre
            inputTelefono.value = datosdeusuario.telefono
            inputEmail.value = datosdeusuario.email
    }else{
        //btnSubmit.disabled = true //deshabilito el boton submit
    }
}
recuperodatosususario()  //llamo a la funcion recuperodatosususario()


//ciclo para recorrer el localStorage 
/* for (let i = 0; i < localStorage.length; i++) { //localStorage.length es una propiedad que me dice cuantos elementos tiene el localStorage
    let clave = localStorage.key(i) //obtiene la clave de cada elemento del localStorage
    let valor = localStorage.getItem(clave) //obtiene el valor de una clave
    console.log(clave, valor)//muestra la clave y el valor
}
*/
