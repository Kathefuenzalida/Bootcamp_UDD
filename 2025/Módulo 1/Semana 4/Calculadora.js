//Calculadora
//Pedimos los dadtos al usuario
let numero1 = parseFloat(prompt("Introduce el primer número: " ))
let numero2 = parseFloat(prompt("Introduce el segundo numero: "))
let operacion = prompt("Introduce la operacion deseada, Sumar, Restar, Multiplicar, División): ")
// Se validan los datos ingresados
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Introduce números válidos")
} 
else 
{
let resultado //variable para almacenar resultado

//Realizamos la operación según la opción elegida
    switch (operacion) {
        case "Sumar":
            resultado = numero1 + numero2
            break
        case "Restar":
            resultado = numero1 - numero2
            break
        case "Multiplicar":
            resultado = numero1 * numero2
            break
        case "División":
            if (numero2 === 0) {
                resultado = ("No se puede dividir por cero")
            }else  {
           
            resultado = numero1 / numero2
        }
            break
        default: 
        alert: ("Operación no valida, elije entre Sumar, Restar, Multiplicar o Division")
    }
    //Mostramos el resultado
    alert("El resultado de la operación " + operacion + " es: " + resultado)  
    }