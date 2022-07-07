//ejemplo de promesas en javascript 

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola');
    }, 2000);
        reject('Error'); //si se produce un error en la promesa se ejecuta el reject
}).then(() => {
    console.log('Hola');
});

const eventofuturo = ()=>{
    return new Promise((resolve, reject) => { //recibe a resolve y reject como parametros 
        setTimeout(() => { //arrow function interna de la promesa
            res ? resolve('Hola') : reject('Error'); //si res es true se ejecuta resolve, si no se ejecuta reject
        }, 2000); //settimeout ejecuta la funcion resolve despues de 2 segundos 
            reject('Error'); //si se produce un error en la promesa se ejecuta el reject
    })
}
console.log(eventofuturo()); 

//uso de .then y .catch 
eventofuturo(true).then(() => { //si res es true se ejecuta resolve, si no se ejecuta reject
    console.log('Hola');
}).catch(() => {
    console.log('Error');
})

