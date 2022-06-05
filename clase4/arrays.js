//arrays 


const  numero = [1,2,3,4,5,6,7,8,9,10];

//mostrar array por consola
console.log(numero); 

//recorrer array por consola 
for (let i in numero) {
    console.log(numero[i]);
}

console.log(numero[0]); //muestra el primer elemento del array
console.log(numero[numero.length - 1]); //muestra el ultimo elemento del array
//acceder a los elementos del array
const ciudades = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
console.log(ciudades[0]); //muestra el primer elemento del array 
console.log(ciudades[ciudades.length - 1]); //muestra el ultimo elemento del array 
//inidices, inicia en indice 0 
//length, muestra el numero de elementos del array
ciudades.push('Bucaramanga'); //agrega un elemento al final del array 
console.log(ciudades); 
ciudades.length = 3; //elimina los elementos del array 
ciudades.length //muestra el numero de elementos del array 
console.table(ciudades); //muestra el array en forma de tabla

let ciudadelegida = ciudades [2]; //accede al elemento del array
console.log(ciudadelegida);

//recorrer elementos de array 
for (let i in ciudades) {
    console.log(ciudades[i]);
}
function recorrerciudades(ciudades) {
    for (let i in ciudades) {
        console.log(ciudades[i]);
    }
}
recorrerciudades(ciudades); 

function recorrerciudades2(ciudades) {
    for (let i=0; i < ciudades.length; i++) { //recorre el array
        console.log(ciudades[i]);
    }
}
recorrerciudades2(ciudades);

//agregar elementos 
ciudades.push('Cucuta'); //agrega un elemento al final del array

function agregarciudades() {
    const ciudad = prompt('Ingrese una ciudad'); //pide una ciudad
    ciudades.push(ciudad);
}

//unshift agrega un elemento al inicio del array
ciudades.unshift('Cali'); 
console.table(ciudades); 

// pop elimina el ultimo elemento del array
ciudades.pop();
console.table(ciudades); 

//shift elimina el primer elemento del array
ciudades.shift();
console.table(ciudades);

//splice agrega elementos al array 
ciudades.splice(2,0,'Cali'); //agrega un elemento en la posicion 2
//indice del elemento del array y el numero de elementos a eliminar
ciudades.splice(2,1); //elimina un elemento en la posicion 2

function quitarciudades(){
    const ciudad = parseInt(prompt('Ingrese el indice de la ciudad a eliminar'));
    ciudades.splice(ciudad,1); //elimina el elemento en la posicion del indice
    //del array ciudades vamos a retirar el indice guarado en ciudad, eliminando 1 elemento
} 
ciudades.splice(1,2); //elimina los elementos en la posicion 1 y 2



const ciudades2 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
ciudades2.splice(2,4)//elimina los elementos en la posicion 2 hasta la posicion 4 
console.log(ciudades2); //[ 'Bogota', 'Medellin']

//concatenar arrays 
const ciudades3 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
const ciudades4 = ['Bucaramanga', 'Cucuta', 'Manizales'];
const ciudades5 = ciudades3.concat(ciudades4); //concatena los arrays
console.log(ciudades5); //[ 'Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Cucuta', 'Manizales' ]

//slice 
const ciudades6 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
const ciudades7 = ciudades6.slice(1,3); //elimina los elementos en la posicion 1 y 3
const seleccionadas = ciudades6.slice(1,3); //indice y cuantos quiero agregar 
console.log(seleccionadas); //[ 'Medellin', 'Cali' ] de la posicion 1 hasta la posicion 3

//indexOf busca un elemento en el array 
const ciudades8 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
const indice = ciudades8.indexOf('Cali'); //busca el indice del elemento en el array
console.log(indice); //2

function buscarciudades() {
    const ciudad = prompt('Ingrese una ciudad');
    const indice = ciudades8.indexOf(ciudad);
    if (indice === -1) {
        console.log('No se encontro la ciudad');
    } else {
        console.log('La ciudad se encuentra en el indice ' + indice);
    }
}

function quitarciudad(){
    const ciudad = prompt('Ingrese una ciudad');
    const indice = ciudades8.indexOf(ciudad); //busca el indice del elemento en el array
    ciudades8.splice(indice,1); //elimina el elemento en la posicion del indice
    console.log(ciudades8);
}

//includes busca un elemento en el array retorna un booleano
const ciudades9 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
const encontrado = ciudades9.includes('Cali'); //busca el elemento en el array
console.log(encontrado); //true 

//reverse 
const ciudades10 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
const ciudades11 = ciudades10.reverse(); //invierte el orden del array


//join junta los elementos del array en una cadena de string 
const ciudades12 = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena'];
const cadena = ciudades12.join('-'); //junta los elementos del array en una cadena separada por -
console.log(cadena); //Bogota-Medellin-Cali-Barranquilla-Cartagena


function buscarciudad(){
    let ciudadencontrar= prompt('Ingrese una ciudad').toLocaleLowerCase;
    ciudades.find(ciudades.toLocaleLowerCase() === ciudadencontrar);
    //busca un elemento en el array retorna un booleano 
}




































































































































