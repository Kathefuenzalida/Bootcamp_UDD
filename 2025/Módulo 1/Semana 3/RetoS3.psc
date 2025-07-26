Algoritmo RetoS3
	definir arreglo, filas, i, suma, nopar Como Entero; 
	filas<-10
	suma<-0
	nopar<-0
	dimension arreglo[filas];
	
	
	para i<-1 hasta filas con paso 1 hacer 
		escribir 'Ingrese valor para indice ',i;
		leer arreglo[i]
		si arreglo[i]>0 y arreglo[i]<=1000 Entonces
			arreglo[i]<-arreglo[i]; 
		SiNo
			escribir 'Ingrese valor valido para indice ',i;
			leer arreglo[i]; 
			finsi
	fin para
	para i<-1 hasta filas con paso 1 hacer 
	si (arreglo[i]%2 = 0) entonces 
		suma <- suma + arreglo[i]
	SiNo
		nopar<-nopar+1
	fin si 
	fin para
	
	escribir "La suma de los números pares es: ", suma
	escribir "Ingresaste ", nopar, " números impares "
FinAlgoritmo
