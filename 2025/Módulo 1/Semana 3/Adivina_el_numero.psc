Algoritmo Adivina_el_numero
	Definir numeroSecreto, numeroIngresado, intentos Como Entero
	numeroSecreto <-aleatorio(1,100) 
	intentos <- 0
	Escribir "Adivina el número del 1 al 100"
	Repetir
		Escribir "Ingresa un número"
		Leer numeroIngresado
		intentos <- intentos + 1
		Si numeroIngresado < numeroSecreto Entonces
			Escribir "El número ingresado es demasiado pequeño"
		Sino si numeroIngresado > numeroSecreto
				Escribir "El número ingresado es demasiado grande"
			FinSi
			Fin si
	Hasta Que numeroIngresado = numeroSecreto
	Escribir "Felicitaciones haz adivinado el número"
	Escribir "Intentos: ", intentos, " intentos"
	
FinAlgoritmo