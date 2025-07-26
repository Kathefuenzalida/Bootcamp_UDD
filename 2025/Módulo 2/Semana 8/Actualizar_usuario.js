function actualizarUsuario(listaUsuario, nombreUsuario, nuevosDatos){
    if (!Array.isArray(listaUsuario)) {
        throw new Error("La lista de usuarios no es un arreglo.");
    }
    return listaUsuario.map(usuario => {
        if (usuario.nombre === nombreUsuario) {
            //devuelvo el usuario actualizado
            return { ...usuario, ...nuevosDatos };
        }
        return usuario;
    })
    }
//Ejemplo de uso
const listaUsuario = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 28, ciudad: "Valencia" }
];
const actualizados = actualizarUsuario(listaUsuario, "Ana", { edad: 31, ciudad: "Sevilla" });
console.log(actualizados);
console.log(Usuario); 