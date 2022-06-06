//arrays de objetos 

const objeto1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
};
const array = [objeto1, {id:2, nombre: 'Pedro', apellido: 'Perez', edad: 25}];

//producto class
class Producto {
    constructor(id,nombre,importe ) {
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;
    }
}

//array de productos 
const productos = [
    new Producto('Camisa', 20, 'Camisa de manga corta'),
    new Producto('Pantalon', 30, 'Pantalon de algodon'),
    new Producto('Zapatos', 40, 'Zapatos de cuero')

]

//agregando elementos 
function creoID() {
    return parseInt(Math.random() * 100);
}//devuelve un numero aleatorio entre 0 y 100 

function agregarproducto(){
    let nombre=prompt('Ingrese el nombre del producto');
    let precio=parseInt(prompt('Ingrese el precio del producto'));
    productos.push(new Producto(creoID(),nombre,precio)); //agrega un nuevo producto al array producto 

}



