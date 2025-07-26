class Producto {
    constructor(nombre, precio, cantidad) {
        //Validaciones
        if (typeof nombre !== "string") {
            throw new Error("El nombre del producto debe ser una cadena de texto.");
        }
        if (typeof precio !== "number" || precio < 0) {
            throw new Error("El precio del producto debe ser un número positivo.");
        }
        if (!Number.isInteger(cantidad) || cantidad < 0) {
            throw new Error("La cantidad del producto debe ser un número entero positivo.");
        }
        //Asignación de propiedades
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}  

class Curso extends Producto {
    constructor(nombre, precio, cantidad, clases) {
      super(nombre, precio, cantidad);
  
      // Validar que 'clases' sea un arreglo
      if (!Array.isArray(clases)) {
        throw new Error("Las clases deben estar en un arreglo.");
      }
  
      // Validar cada clase dentro del arreglo
      for (const clase of clases) {
        if (typeof clase.titulo !== "string") {
          throw new Error("Cada clase debe tener un título de tipo string.");
        }
        if (typeof clase.completada !== "boolean") {
          throw new Error("Cada clase debe tener un estado 'completada' booleano.");
        }
      }
  
      this.clases = clases;
    }
  
    // Marcar clase como completada
    completarClase(indice) {
      const clase = this.clases[indice];
      if (!clase) {
        console.log(`No existe la clase en el índice ${indice}.`);
        return;
      }
  
      if (clase.completada) {
        console.log(`La clase "${clase.titulo}" ya está completada.`);
      } else {
        clase.completada = true;
        console.log(`Has completado la clase "${clase.titulo}".`);
      }
    }
  
    // Contar clases pendientes
    clasesPendientes() {
      let pendientes = 0;
      for (const clase of this.clases) {
        if (!clase.completada) pendientes++;
      }
      return pendientes;
    }
  }
  const clasesEjemplo = [
    { titulo: "Introducción", completada: false },
    { titulo: "Variables", completada: false },
    { titulo: "Funciones", completada: true }
  ];
  
  const curso1 = new Curso("Curso de JavaScript", 15000, 10, clasesEjemplo);
  
  curso1.completarClase(1); // Marca "Variables" como completada
  console.log(curso1.clasesPendientes()); // → 1 clase pendiente