//guardar datos en local storage

const inputNombre = document.querySelector("#usuario");
const inputPerfil = document.querySelector("#basic-url");
const inputEmail = document.querySelector("#email");



function guardardatosdeusuario() { //recupera la información del formulario y la guarda en el localStorage
    const datosdeusuario={ //objeto literal
        nombre: inputNombre.value,
        perfil: inputPerfil.value,
        email: inputEmail.value
    }
    const datosdeusuarioJSON = JSON.stringify(datosdeusuario) //convertir el objeto literal a un string
    localStorage.setItem("user",datosdeusuarioJSON) 
}

let guardar = document.getElementById("submit");
guardar.addEventListener("click", () => {
    guardardatosdeusuario();
}) 
