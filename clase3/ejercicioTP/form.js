function capturardatosinteresado(){
    var nombre = document.getElementById("nombre").value;
    var id = document.getElementById("id").value;
    var correo = document.getElementById("email").value;
    var telefono = document.getElementById("tel").value;

    
    Swal.fire("Datos registrados: \n" + "Nombre: " + nombre + "\nId: " + id + "\nCorreo: " + correo + "\nTelefono: " + telefono)


}


const objdatos = {
    nombre: nombre,
    id: id,
    correo: correo,
    telefono: telefono
}
//funcion mostrar datos en html
function mostrardatos(){
    document.getElementById("resultado").innerHTML = `Nombre: ${objdatos.nombre} \nId: ${objdatos.id} \nCorreo: ${objdatos.correo} \nTelefono: ${objdatos.telefono}`;
}




function verificarcredito(){
    var salario = document.getElementById("salario").value;
    var salarioEsperado = 1000000;
    if(salario > salarioEsperado){
        
        Swal.fire("Hay viabilidad para el crédito")
    }else{
        Swal.fire("No hay viabilidad para el crédito, por el salario"); 
    }
    var boton = document.getElementById("boton");
    boton.style.backgroundColor = "red";
}