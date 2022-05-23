alert("Welcome to my website!"); 
let numero = parseInt (prompt("Ingrese un numero"))

alert (typeof numero) //typeof devuelve el tipo de dato
for (let i = 0; i <= 10; i++) {
    suma= numero + i
    alert("El resultado de la suma de la iteración y numero es: " + suma)  
    while (suma > numero) {
        alert("El resultado es mayor al numero ingresado")
        break
    }
}
