//abstracción: es una función que tiene una función dentro de ella
const cursos = [
    {nombre: 'Javascript', duracion: '4 semanas'},
    {nombre: 'Python', duracion: '2 semanas'},
]
const resultado = cursos.find((el)=> el.nombre === 'Javascript') //busca un elemento en el array retorna un booleano 
const resultado2 = cursos.find((el)=> el.nombre === 'python') //busca un elemento en el array retorna un booleano

console.log(resultado)
console.log(resultado2) 

//array productos
class Producto {
    constructor(id,nombre,importe ) {
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;
    }
}
//function crear producto
function crearproducto(){
    let nombre=prompt('Ingrese el nombre del producto');
    let precio=parseInt(prompt('Ingrese el precio del producto'));
    productos.push(new Producto(creoID(),nombre,precio)); //agrega un nuevo producto al array producto 
}
//function buscar producto
function buscarproducto(){
    let nombre=prompt('Ingrese el nombre del producto');
        if(productos.find((el)=> el.nombre === nombre)){ //pasando por parametro el nombre del producto, busca un elemento, copia de los elementos del array productos
            console.log('El producto existe');
        }else{
            console.log('El producto no existe');
        }
}
buscarproducto(); //llamando a la funcion buscarproducto 

function buscarproductodos(){
    let prod = prompt('Ingrese el nombre del producto');
       if(prod !== ""){
           let resultado = productos.find((el)=> el.nombre === prod.toLocaleUpperCase()); //el es un parametro que recibe la funcion find, busca por el nombre pero podemos usar cualquiera de sus prpiedades para buscar
           console.table(resultado);
           
       } else{
               console.log('El producto no existe');
       }   
       
}

buscarproductodos (); //llamando a la funcion buscarproductodos

//filter
const cursos2 = [
    {nombre: 'Javascript', duracion: '4 semanas', precio: 20},
    {nombre: 'Python', duracion: '2 semanas',precio: 40},
    {nombre: 'C#', duracion: '3 semanas', precio: 55},
    {nombre: 'Java', duracion: '1 semana',precio: 60},
    {nombre: 'C++', duracion: '2 semanas',precio: 49},
    {nombre: 'C', duracion: '1 semana',precio: 44},
    {nombre: 'PHP', duracion: '2 semanas',precio: 35},
];

function filtrarcursos(){ //itera sobre el array cursos2 
    let duracion = prompt('Ingrese la duracion del curso'); //duracion del curso
    let resultado = cursos2.filter((el)=> el.duracion === duracion);//el es un parametro que recibe la funcion filter, busca por la duracion del curso
    console.table(resultado); //puedo usar otra propiedad del array para buscar el resultado deseado. 
}
filtrarcursos(); //llamando a la funcion filtrarcursos 

//some, es una funcion que itera sobre el array cursos2 
function existecursos(){
    let nombre = prompt('Ingrese el nombre del curso');
    let existe= cursos2.some((el)=> el.nombre === nombre); //el es un parametro que recibe la funcion some, busca por el nombre del curso, definimos el tipo de busqueda
    if(existe){ //lo guardamos en una variable y lo mostramos 
        console.log('El curso existe');
    }else{
        console.log('El curso no existe');
    }
}

//map 
//incrementar el precio de los cursos 
function proyectarincremento(p){ //p es el porcentaje de incremento 
    let proyeccion = cursos2.map(p=>{
        return{
            nombre: p.nombre, //propiedades del objeto 
            duracion: p.duracion,
            precio: p.precio,
            proyeccion: p.precio * p
        }
    })
    console.table(proyeccion);
}
proyectarincremento(1.1); //llamando a la funcion proyectarincremento, 1.1 es el porcentaje de incremento 

//reduce 
const carrito=[]
function agregarproducto(){
    let nombre = prompt('Ingrese el nombre del producto');
    let precio = parseInt(prompt('Ingrese el precio del producto'));
    carrito.push({nombre,precio});
}
function calcularcarrito(){
    let total = carrito.reduce((acumulador,producto)=>{ //acumulador es el valor acumulado, producto es el producto que se esta iterando
        return acumulador + producto.precio;
    },0);
    console.log(total);
}
agregarproducto();
calcularcarrito();


