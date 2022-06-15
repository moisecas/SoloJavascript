function capturardatosinteresado(){
    var nombre = document.getElementById("nombre").value;
    var id = document.getElementById("id").value;
    var correo = document.getElementById("email").value;
    var telefono = document.getElementById("tel").value;
    alert("Datos registrados: \n" + "Nombre: " + nombre + "\nId: " + id + "\nCorreo: " + correo + "\nTelefono: " + telefono);


}

function verificarcredito(){
    var salario = document.getElementById("salario").value;
    var salarioEsperado = 1000000;
    if(salario > salarioEsperado){
        alert("Hay viabilidad para el crédito");
    }else{
        alert("No hay viabilidad para el crédito, por el salario");
    }
}