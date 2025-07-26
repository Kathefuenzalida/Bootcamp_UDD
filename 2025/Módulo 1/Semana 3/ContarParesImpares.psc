Algoritmo ContarParesImpares
	Definir numeros Como Entero
	Dimension numeros[10] // Defino tamaño del arreglo
	Definir i, pares, impares Como Entero
	pares <- 0
	impares<- 0 
	//Ciclo para recibir numberarray
	Para i<-1 Hasta 10 Hacer
		Escribir "Ingresa un número entero: "
		Leer numeros[i]
	FinPara
	//Contar pares e impares
	Para i<-1 Hasta 10 Hacer
		si (numeros[i] mod 2) = 0 Entonces
			pares <- pares + 1
		SiNo
			impares <- impares + 1
		FinSi
		FinPara
	//Muestro q de números pares e impares ingresados por usuario
		Escribir "Cantidad de números pares ingresados: ", pares
		Escribir "Cantidad de números impares ingresados: ", impares
		
FinAlgoritmo
