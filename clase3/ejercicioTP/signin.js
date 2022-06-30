//validar inicio de sesión admin 
//usando operadores ternarios validar si el usuario es admin
function validar(){
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   let acceso = email == "admin@admin" && password == "admin"; //operador ternario
   acceso ? Swal.fire("Bienvenido admin") : Swal.fire("Usuario o contraseña incorrectos");  
}
let btn = document.getElementById("submit"); //boton para calcular el credito 
btn.addEventListener("click", () => {
     validar(email.value, password.value);
      
})
