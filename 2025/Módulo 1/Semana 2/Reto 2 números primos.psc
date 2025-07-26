Algoritmo Validar_num_primo
	
	Definir num, i, n, resultado Como Entero
	Definir primo Como logico
	
	Escribir "¿Qué número deseas validar como primo?"
	Leer num
	si num > 0 Entonces
		Escribir "Validaremos si el número ", num, " es primo"
	FinSi
	
	Mientras num <= 0 Hacer
		Escribir "Ingrese un número mayor a cero: "
		Leer num
	Fin Mientras
	//en este punto estoy segura que num es positivo
	n <- num - 1
	
	si num == 1 Entonces
		primo <- Falso
		
	sino
		primo <- Verdadero
		Para i <- 2 hasta n Hacer
			si num % i == 0 entonces
				primo <- Falso
				Escribir "Divisor: ", i
			FinSi
		FinPara
		
	fin si
	
	si num == 2 entonces
		primo <- verdadero
	FinSi
	

	si primo = Verdadero entonces
		Escribir "El número ingresado es primo"
	FinSi
FinAlgoritmo
