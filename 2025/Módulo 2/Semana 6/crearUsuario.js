function CrearUsuario(nombre, apellido, email, ocupacion, edad){

    //validar
    if(typeof nombre !== "string" || nombre.trim()===""){
    return "Error: el nombre debe ser un texto";
}

if(typeof apellido !== "string" || apellido.trim()===""){
    return "Error: el apellido debe ser un texto";
    }

//email @ . 
if(typeof email !== "string" || !email.includes("@") || !email.includes(".")){
    return "Error: el email debe ser un texto con formato correcto";
    }

if(typeof ocupacion !== "string" || ocupacion.trim()===""){
    return "Error: la ocupación debe ser un texto";
    }

if(typeof edad !== "number" || edad < 0 || edad > 120) { 
    return "Error: la edad debe ser un número entre 0 y 120";
} 

//crear el objeto
return {
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    email: email.trim(),
    ocupacion: ocupacion.trim(),
    edad: edad, 
};
}

//Ejemplo de uso
const usuario1 = CrearUsuario("Carlos", "Sánchez", "carlos@mail.com", "Ingeniero", 30);
console.log(usuario1);
const usuario2 = CrearUsuario("Juan", "Sánchez", "carlos@mail.com", "Ingeniero", 0);
console.log(usuario2);