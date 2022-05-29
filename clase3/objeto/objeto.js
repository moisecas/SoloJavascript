function Producto(nombre, precio, cantidad, iva) {
    this.nombre = nombre; //this, su propiedad nombre, le asigna el valor de los parametros 
    this.precio = precio; //los parametros definen los atributos del objeto 
    this.cantidad = cantidad;
    this.iva = iva
    this.precioFinal = function () {
        return this.precio * this.iva
    }, //funcion que calcula el precio final del producto
    this.descuentocantidad = function (unidad) {
        this.cantidad = this.cantidad - unidad;
    }
    
    
  
}