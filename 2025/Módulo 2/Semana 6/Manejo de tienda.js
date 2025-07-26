function manejoTienda(productosIniciales = []) {
    //validar
    const inventario = Array.isArray(productosIniciales) ? productosIniciales.filter(p => p.nombre && typeof p.precio === "number" && typeof p.cantidad === "number")
        : [];
    return {
        inventario,

//método 1
        agregarProducto(producto) {
            if (
                typeof producto !== "object" ||
                !producto.nombre ||
                typeof producto.precio !== "number" ||
                typeof producto.cantidad !== "number"
            ) {
                console.log("Error: el producto debe ser un objeto con nombre, precio y cantidad válidos");
                return;
            }
            const existente = this.inventario.find(p => p.nombre === producto.nombre);
            if (existente) {
                existente.cantidad += producto.cantidad;
                existente.precio = producto.precio;
                console.log(`Producto ${producto.nombre} actualizado. Nueva cantidad: ${existente.cantidad}`);
            } else {
                this.inventario.push(producto);
                console.log(`Producto ${producto.nombre} agregado al inventario.`);
            }
        },
//método 2
        eliminarProducto(nombre) {
            const index = this.inventario.findIndex(p => p.nombre === nombre);
            if (index !== -1) {
                //splice= cambia el contenido de un array eliminando elementos existentes
                this.inventario.splice(index, 1);
                console.log(`Producto ${nombre} eliminado del inventario.`);
            } else {
                console.log(`Error: el producto ${nombre} no existe en el inventario.`);
            }
        },
//método 3
        calcularValortotal() {

            //reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
            const total = this.inventario.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
            console.log(`Valor total del inventario: $${total}`);
        }


    }

}

//Ejemplo de uso
const tienda = manejoTienda([
    { nombre: "Laptop", precio: 1000, cantidad: 5 },
    { nombre: "Mouse", precio: 25, cantidad: 20 },
]);

tienda.agregarProducto({ nombre: "Teclado", precio: 50, cantidad: 10 });
tienda.agregarProducto({ nombre: "Mouse", precio: 30, cantidad: 5 });
tienda.agregarProducto({ nombre: "pantalla", precio: 140, cantidad: 10 });
tienda.agregarProducto({ nombre: "pantalla", precio: 140, cantidad: 10 });

tienda.eliminarProducto("Laptop");
tienda.eliminarProducto("Tablet");

tienda.calcularValortotal();
console.log(tienda.inventario);


//Control + z vuelve a la version anterior // control + y vuelve a la version siguiente
//Control + k + c comenta la linea seleccionada
//Control + k + u descomenta la linea seleccionada
//Control + k + d formatea el documento
//Control + k + f formatea el documento seleccionado
//Control + k + s guarda el documento seleccionado
//Control + k + 0 guarda todos los documentos abiertos