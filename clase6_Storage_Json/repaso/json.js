var pelicula = { //definiendo objeto json
    titulo: "El señor de los anillos",
    year: "2001",
    pais: "EEUU",
}; 

//cambiar el valor de una propiedad 
pelicula.titulo = "El señor de los anillos 2"; //variable.valor = "nuevo valor"

var peliculas = [ //array de objetos json   
    {
        titulo: "El señor de los anillos",
        year: "2001",
        pais: "EEUU",
    },
    {
        titulo: "El señor de los anillos 2",
        year: "2002",
        pais: "EEUU",
    }
] //array de objetos json

console.log(pelicula); //muestra el objeto json en consola 

//recorrer un array de objetos json 
var cajapeliculas = document.querySelector("#peliculas"); //selecciono el elemento html que contiene el array de objetos json
var index; //variable para recorrer el array de objetos json 
for (index in peliculas) {
    var parrafo = document.createElement("p"); //creo un elemento p
    parrafo.append(peliculas[index].titulo + " " + peliculas[index].year); //agrego el titulo de cada pelicula al elemento p
    cajapeliculas.append(parrafo); //agrego el elemento p al elemento html que contiene el array de objetos json
}