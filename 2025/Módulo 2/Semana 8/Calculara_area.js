function CalcularArea(longitud, ancho){
    //Validar que ambos parametros seran numeros
    if (typeof longitud !== 'number' || typeof ancho !== 'number') {
        throw new Error('Ambos parámetros deben ser números mayores a cero.');
    }
    if (longitud < 0 || ancho < 0) {
        throw new Error('Ambos parámetros deben ser números mayores a cero.');
    }
    //Calcular el area
    const area = longitud * ancho;
    return Math.round(area * 100) / 100; // Redondear a dos decimales
}
//Ejemplo de uso
console.log(CalcularArea(5, 10)); // 50
console.log(CalcularArea(5.123456, 10.654321)); // 54.63
CalcularArea(5, '10'); // Error: Ambos parámetros deben ser números mayores a cero.