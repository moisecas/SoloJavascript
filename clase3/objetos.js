//objeto persona
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 23,
    direccion:"calle falsa 123",
}
const persona1 ={
    nombre: 'Maria',
    apellido: 'Gomez',
    edad: 25,
    direccion:"calle falsa 123",
}
//modificar un objeto
persona.nombre = 'Pedro'; //modifica el nombre de la persona, no la variable persona, nombreobjeto.key = value 
persona.edad = 30;
persona.direccion = 'calle falsa 123';
console.log(persona); //muestra los datos de la persona actualizados

function personas (nombre,edad,calle){
    this.nombre=nombre;
    this.edad=edad;
    this.calle=calle;
    console.log(personas); 
}
//let persona2 = new persona("omar",23,"calle falsa 13");
personas("Tyson",30,"dir"); //muestra los datos de la persona actualizados  

function Producto(nombre,precio,cantidad, iva){
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.iva=iva;
    this.preciofinal=function(){
        return this.precio*this.iva;
    }
    this.descuento=function(u){ //u son las unidades que se van a descontar del producto 
        this.cantidad=this.cantidad-u;
    }
    
}
const producto1 = new Producto("tomate",10,5,0.21);
