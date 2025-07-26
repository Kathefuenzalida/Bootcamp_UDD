//1.Arreglo para guardar libros
let biblioteca = [];
//2. Función de declaración para agregar libros
function agregarLibro(titulo, autor, isbn) {
    //Validación texto no vacio 
    if (typeof titulo !== "string" || titulo.trim() === "") {
        return "Error: el título debe ser un texto no vacío.";
    }
    if (typeof autor !== "string" || autor.trim() === "") {
        return "Error: el autor debe ser un texto no vacío.";
    }
    //Validación ISBN como cadena de dígitos
    if (typeof isbn !== 'string' || !/^\d+$/.test(isbn) || isbn.trim().length < 5) {
        return 'Error: el ISBN debe ser una cadena de dígitos válida.';
    }
    //Ahora añado el libro al arreglo
    biblioteca.push({titulo: titulo.trim(), autor: autor.trim(), isbn: isbn.trim()}); 
    return `Libro "${titulo.trim()}" agregado correctamente.`;
}
const eliminarLibro = function(titulo) {
   //Normalizar título de busqueda
    const tituloBuscado = titulo.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
    // Buscar el índice del libro cuyo título coincida exactamente
    const index = biblioteca.findIndex(libro => libro.titulo.trim().toLowerCase() === tituloBuscado);

    if (index !== -1) {
        // Eliminar 1 elemento a partir de esa posición
        biblioteca.splice(index, 1);
        return `Libro "${titulo}" eliminado correctamente.`;
    } else {
        return `Error: no se encontró el libro "${titulo}".`;
    }
};
// Función para buscar un libro por título
const buscarLibro = function(titulo) {
    const tituloBuscado = titulo.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
    const libro = biblioteca.find(libroItem => libroItem.titulo.trim().toLowerCase() === tituloBuscado);
    if (libro) {
        return libro//devuelve el objeto contacto
    } else {
        return `Error: no se encontró el libro con nombre "${titulo.trim()}".`;
    }
}
// Función para mostrar libros
const mostrarLibros = () => {
    if (biblioteca.length === 0) {
        console.log("No hay libros disponibles.");
    } else {
        biblioteca.forEach(libro => {
            console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, ISBN: ${libro.isbn}`);
        });
    }
};
 

console.log(agregarLibro("1984", "George Orwell", "0451524934"));
console.log(agregarLibro("El Principito", "Antoine de Saint-Exupéry", "9780156012195"));
console.log(agregarLibro("Maria", "nosenosabe", "0451524934"));
console.log(agregarLibro("Juanita", "nosenosabe", "9780156012195"));

// Buscamos libros con variaciones
console.log(buscarLibro(" 1984 "));         
console.log(buscarLibro("el PRINCIPITO"));  
// Caso de no existirs
console.log(buscarLibro("Don Quijote"));
mostrarLibros(); // Mostrar todos los libros
console.log(biblioteca); // Mostrar el arreglo de libros