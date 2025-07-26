class Producto {
  constructor(nombre, precio, cantidad) {
    if (typeof nombre !== "string" ){
      throw new Error("El nombre del producto debe ser una cadena de texto string.");
    }
    if (typeof precio !== "number" || precio < 0) {
      throw new Error("El precio del producto debe ser un número positivo.");
    }
    if(!Number.isInteger(cantidad) || cantidad < 0) {
      throw new Error("La cantidad del producto debe ser un número entero positivo.");
    }

    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  vender(cantidad) {
    if (this.cantidad >= cantidad) {
      this.cantidad -= cantidad;
      console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}.`);
    } else {
      console.log(`No hay suficiente stock de ${this.nombre}.`);
    }
  }
}
class Serie extends Producto {
  constructor(nombre, precio, cantidad, temporadas) {
    super(nombre, precio, cantidad);

    //validación para asegurarme que las temporadas son un array de arrays
    if (!Array.isArray(temporadas) || !temporadas.every(Array.isArray)) {
      throw new Error("Las temporadas deben ser un array de arrays.");
    }
    this.temporadas = temporadas;
  }
verEpisodio(numTemporada, numEpisodio) {
  const temporada = this.temporadas[numTemporada];
  if (!temporada){
    console.log(`No existe la temporada ${numTemporada}.`);
    return;
  }
  const episodio = temporada[numEpisodio];
  if (!episodio) {
    console.log(`No existe el episodio ${numEpisodio} de la temporada ${numTemporada}.`);
    return;
  }

if (episodio.visto) {
    console.log(`El episodio ${numEpisodio} de la temporada ${numTemporada} ya ha sido visto.`);
  } else { 
    episodio.visto = true;
    console.log(`Has visto el episodio ${numEpisodio} de la temporada ${numTemporada}.`);
  }
}
episodiosPorVer() {
let totalEpisodios = 0;
for (const temporada of this.temporadas) {
  for (const episodio of temporada) {
    //Validaciones
    if (typeof episodio.nombre !== "string") {
      throw new Error("Cada episodio debe tener un nombre de tipo string.");
    }
    if (typeof episodio.visto !== "boolean") {
      throw new Error("Cada episodio debe tener un estado 'visto' booleano.");
    }
    if (!episodio.visto) {
      totalEpisodios++;
    }
  }
  }
  return totalEpisodios;
}
vender(cantidad) {
  if (this.cantidad >= cantidad) {
    this.cantidad -= cantidad;
    console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}.`);
  } else {
    console.log(`No hay suficiente stock de ${this.nombre}.`);
  }
}
}
// Crear una serie de ejemplo 
const temporadasEjemplo = [
  [ { nombre: "Ep1", visto: false }, { nombre: "Ep2", visto: false } ],
  [ { nombre: "Ep1", visto: false } ]
];

const serieEjemplo = new Serie("Mi Serie", 20, 10, temporadasEjemplo);
const episodiosPorVer = serieEjemplo.episodiosPorVer();
console.log(`Total de episodios por ver: ${episodiosPorVer}`);
console.log(serieEjemplo);
serieEjemplo.vender(2);
