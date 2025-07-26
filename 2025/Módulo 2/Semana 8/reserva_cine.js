function reservarAsiento(asientoDisponibles, asientoReservado) {
    if(!Array.isArray(asientoDisponibles)){
        throw new Error("La lista de asientos debe ser un arreglo");
    }
    if(typeof asientoReservado !== "number"){
        throw new Error("El asiento reservado no es un número");
    }
    //Verifico si el asiento existe en la lista
    if(!asientoDisponibles.includes(asientoReservado)){
        throw new Error("El asiento reservado no esta disponible");
    }
    //Retornar lista sin el asiento resevado
    return asientoDisponibles.filter(asiento => asiento !== asientoReservado);
}
//Ejemplo de uso
const disponibles = [1, 2, 4, 5, 7, 8, 9, 10];
const nuevaLista = reservarAsiento(disponibles, 5);

console.log(disponibles);
console.log(nuevaLista);