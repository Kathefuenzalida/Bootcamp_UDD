class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}.`);
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}.`);
        }
    }
}
//Uso de clase
const producto1 = new Producto("Camiseta", 20, 100);
const producto2 = new Producto("Pantalón", 30, 50);

producto1.vender(10); // "Se han vendido 10 unidades de Camiseta."
producto2.vender(60); // "No hay suficiente stock de Pantalón."
