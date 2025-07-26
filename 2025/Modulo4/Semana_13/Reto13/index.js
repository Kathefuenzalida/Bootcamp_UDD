const prompt = require('prompt-sync')();//aca tengo un error en el require, no se a que se debe.
const chalk = require('chalk').default;
const nombre = prompt("¿Cuál es tu nombre? ");
const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (YYYY-MM-DD) ");
const ciudad = prompt("¿En qué ciudad vives? ");
const fechaNacimientoObj = new Date(fechaNacimiento);
const fechaActual = new Date();

const diferenciaMilisegundos = fechaActual - fechaNacimientoObj;
const edad = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25)); // considerando años bisiestos
const edadBisiestos = Math.floor(edad / 4);
const edadPerro = edad * 7;
console.log(chalk.blue.bold("\n=== Resultados ==="));
console.log(chalk.green(`Nombre: ${nombre}`));
console.log(chalk.green(`Ciudad: ${ciudad}`));
console.log(chalk.yellow(`Edad: ${edad} años`));
console.log(chalk.cyan(`Años bisiestos vividos: ${edadBisiestos}`));
console.log(chalk.magenta(`Edad en años perro: ${edadPerro}`));