//ES6 SINTAXIS mas clara para crear objetos 
class persona {
    constructor(nombre, apellido, edad, direccion) { //constructor recibe todo los parametros que se le pasan a la funcion 
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }
    hablar() {
        console.log("Hola" + this.nombre);
    }
}
const persona1 = new persona("Juan", "Perez", 23, "calle falsa 123");
console.log(persona1); //muestra los datos de la persona actualizados 