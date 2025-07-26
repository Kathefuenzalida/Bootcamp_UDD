function agregarPaciente(listaPacientes, nuevoPaciente){
    if(!Array.isArray(listaPacientes)){
        throw new Error("La lista Pacientes no es un arreglo");
    }
    if(typeof nuevoPaciente !== "object" || !nuevoPaciente.nombre){
        throw new Error("El nuevo paciente no es un objeto válido o el nombre es incorrecto");
    }
    const existe = listaPacientes.some(paciente => paciente.nombre === nuevoPaciente.nombre);
    if(existe){
        throw new Error("El paciente ya existe en la lista");
    }
    //retorna la lista de pacientes con el nuevo paciente agregado
    return [...listaPacientes, nuevoPaciente];
}
function buscarPaciente(listaPacientes, nombreBuscado){
    if(!Array.isArray(listaPacientes)){
        throw new Error("La lista Pacientes no es un arreglo");
    }
    if(typeof nombreBuscado !== "string"){
        throw new Error("El nombre buscado no es una cadena de texto válida");
    }
  //Buscar el paciente en la ista
  if(listaPacientes.length === 0){
   return "No hay pacientes en la lista";
  }
  const encontrado = listaPacientes.find(paciente => paciente.nombre === nombreBuscado);
  return encontrado ||`Paciente no encontrado`;
}

// Ejemplo de uso
const pacientes = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 }
];
console.log(pacientes);
const nuevoPaciente = agregarPaciente(pacientes, { nombre: "Pedro", edad: 40 });
console.log(nuevoPaciente);
//Buscar paciente
const resultado = buscarPaciente(nuevoPaciente, "Pedro");
console.log(resultado); // { nombre: "Pedro", edad: 40 }