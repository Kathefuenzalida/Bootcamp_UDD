class  Producto{
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.estado = "disponible"
    }

    describir() {
        console.log(` El producto ${this.name} tiene ${this.stock} unidades disponibles.`);
    }
}
class Libro extends Producto {
    constructor(nombre, precio, stock, autor, estado) {
        super(nombre, precio, stock, estado);
        this.autor = autor;
    }
    resumen() {
        console.log(`El libro ${this.nombre} de ${this.autor} tiene un precio de $${this.precio} y hay ${this.stock} unidades disponibles, y el estado es ${this.estado}.`);
    }
}
//Material de prueba
const libro1 = new Libro("El Principito", 10, 5, "Antoine de Saint-Exupéry", "disponible");
const libro2 = new Libro("Cien años de soledad", 15, 3, "Gabriel García Márquez", "disponible");
libro1.resumen();
libro2.resumen();