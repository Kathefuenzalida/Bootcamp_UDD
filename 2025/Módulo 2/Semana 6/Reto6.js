let catalogo = [];
//declaración
function agregarProducto(nombre) {
  catalogo.push({ nombre: nombre, completada: false });
  console.log(`Producto "${nombre}" agregado.`);
}

//expresión
const eliminarProducto = function(nombre) {
  const index = catalogo.findIndex(producto => producto.nombre === nombre); 
  if (index !== -1) { 
    catalogo.splice(index, 1); 
    console.log(`producto "${nombre}" eliminado.`); 
  } else {
    console.log(`producto "${nombre}" no encontrada.`);
  }
};
//Anónima
const buscarProducto = function(nombre) { 
  return catalogo.find(function(producto) { 
    return producto.nombre === nombre;
  });
};
//Flecha
const mostrarProducto = () => { 
  console.log("Catálogo:");
  catalogo.forEach(producto => console.log(`- ${producto.nombre}`)); 
};

// Ejemplo de uso
agregarProducto("Gomero");
agregarProducto("Lilium");
agregarProducto("Liquidambar");
agregarProducto("Pino azul");
agregarProducto("Camelia");
agregarProducto("Margaritas");
eliminarProducto("Camelia");
console.log(buscarProducto("Pino azul"))
mostrarProducto()