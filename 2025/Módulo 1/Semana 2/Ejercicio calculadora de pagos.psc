Algoritmo sin_titulo
	//Calculadora de descuentos y pagos
	//Definir descuentos 
	Definir Descuento_10, Descuento_20, Descuento_30 Como Real
	Descuento_10 <- 0.10
	Descuento_10 <- 0.20
	Descuento_10 <- 0.30
	IVA <- 0.19
	//Definir variables
	Definir nombreProducto como Cadena
	Definir precioUnitario,totaliva, Cantidad, subtotal, descuento, total, montoPagar, cambio como Real
	//Solicitar datos a usuario
	Escribir "Ingrese nombre del producto: "
	Leer nombreProducto
	Escribir "Ingrese precio unitario de cada producto: "
	Leer precioUnitario
	Escribir "Ingrese la cantidad a comprar: "
	Leer Cantidad
	//Calcular subtotal
	subtotal <- precioUnitario * Cantidad
	
	
	//Calcular descuento
	si Cantidad > 50 Entonces
		descuento<-subtotal*Descuento_30
	sino Si Cantidad > 20 Entonces
		descuento<-subtotal*Descuento_20
	sino si Cantidad > 10 Entonces
			descuento<-subtotal*Descuento_10
	sino descuento<-0
	FinSi
	FinSi
	FinSi

	//Calcular el total
	total <- subtotal-descuento
	totaliva<-total*IVA
	totalconIva = total + totaliva
	
	//Detalle de la compra
	Escribir "---------------------------------"
	Escribir "Producto: ", nombreProducto
	Escribir "La cantidad comprada", Cantidad
	Escribir "Subtotal: $", subtotal
	Escribir "El descuento aplicado es: $", descuento
	Escribir "El IVA de su compra es: $", totaliva
	Escribir "El total es: $", totalconIva
	Escribir "---------------------------------"
	
	//Solicitar monto a pagar
	Escribir "Ingrese el monto a pagar"
	Leer montoPagar
	
	//Evaluamos el vuelto
	si montoPagar = total Entonces
		Escribir "Pago exacto. Gracias por su compra!!"
	sino si montoPagar>totalconIva Entonces
			cambio<-montoPagar-totalconIva
			Escribir "Pago recibido. Su cambio es: $", cambio
		SiNo
			Escribir "Saldo insuficiente" 
		FinSi
	FinSi
	
FinAlgoritmo
