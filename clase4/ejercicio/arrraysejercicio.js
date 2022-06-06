alert("Bienvenido")

//array personas
var personas = [];

function agregarpersonas() {
    var nombre = prompt("Ingrese el nombre");
    var apellido = prompt("Ingrese el apellido");
    var edad = parseInt(prompt("Ingrese la edad"));
    alert("Persona agregada, ver en el inspector, variable personas");
    var persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };
    personas.push(persona);
}
agregarpersonas()