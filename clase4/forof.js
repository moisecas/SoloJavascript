//forof
function recorrerarray() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) { //declaramos una variable para recorrer el array  y una para guardar el valor de cada elemento 
        var i = array_1[_i];
        console.log(i);
    }
}

//forof
//array de productos



function forof(){
    for (const elemento of productos){ //recorre el array productos, elemento es una variable que recorre cada elemento del array 
        console.table(elemento) //imprime en consola el objeto 

    } //por cada vez que itera se alimenta const elemento 
    
}



