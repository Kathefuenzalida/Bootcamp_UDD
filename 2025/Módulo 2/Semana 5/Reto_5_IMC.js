const bajopeso = 18.5
const normal = 25
const sobrepeso = 30
    let peso = Number(prompt(" Ingresa tu peso en kg"))
    while (isNaN(peso)){
        alert ("peso no válido")
        peso = Number(prompt(" el dato peso debe ser numero"))
    }

    let estatura = parseFloat(prompt(" Ingresa tu estatura en metros"))
    while (isNaN(estatura)){
        alert ("estatura no válida")
        estatura = Number(prompt(" el dato estatura debe ser numero"))
    }
    let IMC = peso / (estatura * estatura);
    alert(`IMC: ${IMC.toFixed(2)}`);

if(IMC <= bajopeso){
	alert(" Clasificación es bajo peso") 
    }else if (IMC >= bajopeso && IMC <=normal){
        alert(" Clasificación es normal")
    }else if (IMC > normal && IMC < sobrepeso){
        alert(" Clasificación es Sobrepeso")
    }
	else if (IMC >= sobrepeso){
        alert(" Clasificación es Obesidad")
    }