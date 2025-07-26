class Libro {

    constructor(titulo, autor, anio, disponible){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.disponible = disponible;
    } 
}
class Biblioteca {
    constructor(){
        this.listalibros = [];
    }

agregarLibro(libro){
    this.listalibros.push(libro);
    console.log(`El libro "${libro.titulo}" ha sido agregado a la biblioteca.`);
}
BuscarPorTitulo(titulo) {
    return this.listalibros.find(libro => libro.titulo === titulo);
}
prestarLibro(titulo) {
    let libroEncontrado = this.BuscarPorTitulo(titulo);
    if (libroEncontrado && libroEncontrado.disponible) {
        libroEncontrado.disponible = false;
        console.log(`El libro "${libroEncontrado.titulo}" ha sido prestado.`);
    } else {
        console.log(`No se pudo prestar el libro "${titulo}".`);
    }
}
}
class LibroInfantil extends Libro {

     constructor(titulo, autor, anio, disponible, edadMinima) {
        super(titulo, autor, anio, disponible);
        this.edadMinima = edadMinima;
    }}

    const biblioteca = new Biblioteca();

    const Lacasadelosespiritus = new Libro("La Casa de los Espiritus", "isabelallende", 1987, true);
    const ElQuijote = new Libro("El Quijote de la Mancha", "JorgeLuisBorges", 1935, false);
    const CienañosdeSoledad = new Libro("Cien años de Soledad", "JorgeLuisBorges", 1967, true);
    const alibaba = new LibroInfantil("AliBaba y los 40 ladrones", "nose", 1987, false, 6);

    biblioteca.agregarLibro(alibaba);
    biblioteca.agregarLibro(CienañosdeSoledad);
    biblioteca.agregarLibro(ElQuijote);
    biblioteca.agregarLibro(Lacasadelosespiritus);
    biblioteca.agregarLibro(alibaba);
    
    biblioteca.prestarLibro("AliBaba y los 40 ladrones");