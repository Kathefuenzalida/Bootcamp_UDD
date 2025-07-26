function crearTiendaLibro(librosIniciales = []){
    const inventario = Array.isArray(librosIniciales) ? librosIniciales.filter(libro => libro.nombre && typeof libro.precio === "number" && typeof libro.cantidad === "number") 
    : [];
    return {inventario,
        //Método 1: mostrar inventario
        mostrarInventario(){
            console.log("📚 Inventario actual:");
            this.inventario.forEach (libro => {
                console.log (`- ${libro.nombre}: $${libro.precio} x ${libro.cantidad}unidades`);
            })
    },
//Método 2 agregar libro
agregarLibro(libro){
    if (typeof libro !== "object" || !libro.nombre || typeof libro.precio !== "number" || typeof libro.cantidad !== "number") {
        console.log("❌ Error: El libro no es válido, debe tener nombre, precio, y cantidad.");
        return;
    }
    const existente = this.inventario.find(l => l.nombre===libro.nombre);
    if(existente){
        existente.cantidad += libro.cantidad;
        existente.precio = libro.precio;
        console.log(`📚 ${libro.nombre} actualizado. Nueva cantidad: ${existente.cantidad}`);
    } else {
        this.inventario.push(libro);
        console.log(`📚 ${libro.nombre} agregado al inventario.`);
    }
}
};
}
const tienda = crearTiendaLibro([
    {nombre: "El Señor de los Anillos", precio: 25, cantidad: 10},
    {nombre: "Cien años de soledad", precio: 15, cantidad: 5},
    {nombre: "Crónica de una muerte anunciada", precio: 10, cantidad: 8}
]);
tienda.mostrarInventario();
tienda.agregarLibro({ nombre: "Don Quijote", precio: 20, cantidad: 3 });
tienda.mostrarInventario();
