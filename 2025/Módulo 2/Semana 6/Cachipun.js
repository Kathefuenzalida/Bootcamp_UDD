//Cachipún
//Ingreso de datos
let jugador1 = prompt("Bienvenido jugador 1. Elije Piedra, Papel o Tijeras: ")
let jugador2 = prompt("Bienvenido jugador 2. Elije Piedra, Papel o Tijeras: ")
// Valido jugada ingresada
jugador1 = jugador1.toLowerCase();
jugador2 = jugador2.toLowerCase();
//Valido entrada de datos
const opcionesValidas = ["piedra", "papel", "tijeras"];
if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
    alert("Al menos uno de los jugadores ingresó una opción no válida. Intenta de nuevo.");
} else {
    alert ("Vamos a jugar!!!!");

//Establezco casos
if(jugador1 === jugador2){
    alert("Empate!")
} else if (
    (jugador1 === "piedra" && jugador2 === "tijeras") ||
    (jugador1 === "papel" && jugador2 === "piedra") ||
    (jugador1 === "tijeras" && jugador2 === "papel")
){
    alert("Gana jugador 1!")
} else {
    alert("Gana jugador 2!")
}}