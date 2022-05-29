//operacione con objetos    
const producto1 = {
    nombre: "tomate",
    precio: 10,
    cantidad: 5,
    iva: 0.21,
}
const persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    direccion: "calle falsa 123",
}
const persona = {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 30,
    direccion: "calle  12",
}
//accedemos invocando su nombre
console.log(persona.nombre);//Pedro 

//cambiar datos
persona.nombre = "Pedro"; //modifica el nombre de la persona, no la variable persona, nombreobjeto.key = value 


//objeto constructores, es una funcion que crea un objeto y lo retorna 
function persona(nombre, apellido, edad, direccion) { //definición de la funcion y sus parametros 
    this.nombre = nombre; //this hace referencia al objeto que se esta creando y se le asigna el valor de los parametros 
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
    
}
const persona3 = new persona("Juan", "Perez", 23, "calle falsa 123"); //invocamos la funcion y le pasamos los parametros para crear el objeto 
console.log(persona3); //muestra los datos de la persona actualizados 

//función constructora productos 
function Producto(nombre, precio, cantidad, iva) {
    this.nombre = nombre; //this, su propiedad nombre, le asigna el valor de los parametros 
    this.precio = precio; //los parametros definen los atributos del objeto 
    this.cantidad = cantidad;
    this.iva = iva
    this.precioFinal = function () {
        return this.precio * this.iva
    } //funcion que calcula el precio final del producto
    
  
}
const producto2 = new Producto("tomate", 10, 5, 0.21); //invocamos la funcion y le pasamos los parametros para crear el objeto
const producto3 = new Producto("lechuga", 12, 15, 0.21);
const producto4 = new Producto("cebolla", 9, 55, 0.21); 
console.log(producto2); //muestra los datos de la persona actualizados
console.log(producto3);
console.log(producto4);
console.log(producto2.nombre); //muestra el nombre del producto2  




