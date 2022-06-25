//desestructuración, declarar variables donde se guardarán los datos del usuario

const usuario ={
    nombre: "moises",
    perfil: "linkedin.com",
    telefono:{
        celular: "32058944",
        fijo: "123456789",
        casa: "123456789"
    }
}

//accediendo y guardando en una variable los datos del usuario
let nombre =  usuario.nombre;
let perfil = usuario.perfil; 
let celular = usuario.telefono.celular; //accediendo a los datos de un objeto dentro de otro objeto
console.log(nombre, perfil, celular);

//arrays
const array = [1,2,3,4,5,6,7,8,9,10];
const [a,b]=array; //desestructurar un array, acceder a los datos de un array, busca el primer y segundo elemento
console.log(a,b); //1,2, extraer los dos primeros elementos del array

//spread
const array2 = [1,2,3,4,5,6,7,8,9,10];
const array3 = [...array2,11,12,13,14,15]; //spread, extraer todos los elementos del array y agregar otros
console.log(array3); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//enviar elementos de un array a otro array con spread (...) y agregar otros elementos 





