let contactos = [];
//Función para crear un contacto
function CrearContacto(nombre, telefono ){

    //validar 
    if(typeof nombre !== "string" || nombre.trim()===""){
    return "Error: el nombre debe ser un texto";
}

if(typeof telefono !== "number" || !/^\d+$/.test(telefono.toString()) || telefono.toString().length !== 9){
    return "Error: el teléfono debe tener exactamente 9 dígitos";
}
//si los datos ingresados son válidos, se crea el objeto contacto en el arreglo.
contactos.push({nombre, telefono})
return "Contacto creado exitosamente"
}
// Función para eliminar un contacto
const eliminarContacto = function(nombre){
    const nombreBuscado = nombre.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
    const index = contactos.findIndex(contacto => contacto.nombre.toLowerCase() === nombreBuscado);
    if (index !== -1) {
        contactos.splice(index,1); //Elimina el contacto
        return `Contacto "${nombre}" eliminado correctamente.`;
    } else {
        return `Error: no se encontró el contacto con nombre "${nombre}".`;
    }
};

// Función para buscar un contacto por nombre
const buscarContacto = function(nombre) {
    const nombreBuscado = nombre.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
    const contacto = contactos.find(contacto => contacto.nombre.toLowerCase() === nombreBuscado);
    if (contacto) {
        return contacto//devuelve el objeto contacto
    } else {
        return `Error: no se encontró el contacto con nombre "${nombre}".`;
    }
}

//Función para mostrar contactos
const mostrarContacto = () => {
    if (contactos.length === 0) {
        console.log("No hay contactos almacenados.");
    } else {
        contactos.forEach(contacto => {
            console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
        });
    }
};


//Ejemplo de uso
CrearContacto("Laura", 123456789);
CrearContacto("Carlo", 123456789);   
CrearContacto("Juanita", 123456789);   
console.log(buscarContacto("Laura"));
console.log(buscarContacto("Maria"));
mostrarContacto();
