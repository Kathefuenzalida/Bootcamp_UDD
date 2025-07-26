const ventas = [
        {
          cliente: 'Juan',
        productos: [
            { nombre: 'smartphone', cantidad: 1, precio: 350 },
            { nombre: 'laptop', cantidad: 1, precio: 800 },
          ],
        },
        {
          cliente: 'Ana',
        productos: [
            { nombre: 'smartphone', cantidad: 2, precio: 350 },
            { nombre: 'cámara', cantidad: 1, precio: 250 },
          ],
        },
        {
          cliente: 'Pedro',
        productos: [
            { nombre: 'laptop', cantidad: 1, precio: 800 },
            { nombre: 'cámara', cantidad: 2, precio: 250 },
          ],
        },
      ];
  
  // 1. Calcular el subtotal de cada venta
  const subtotales = ventas.map(venta => {
    const subtotal = venta.productos
      .map(producto => producto.cantidad * producto.precio)
      .reduce((a, b) => a + b, 0);
    return { ...venta, subtotal };
  });
  
  console.log('Subtotales por venta:', subtotales);
  
  // 2. Calcular el total recaudado
  const totalRecaudado = subtotales
    .map(venta => venta.subtotal)
    .reduce((a, b) => a + b, 0);
  
  console.log('Total recaudado:', totalRecaudado); // 59
  
  // 3. Extraer todos los productos de los ventas
  const todosLosproductos = ventas.reduce((productos, venta) => {
    return productos.concat(venta.productos);
  }, []);
  
  console.log('Todos los productos:', todosLosproductos);
  
  // 4. Calcular la cantidad de productos vendidos por tipo
  const productosVendidos = todosLosproductos.reduce((contador, producto) => {
    if (!contador[producto.nombre]) {
      contador[producto.nombre] = 0;
    }
    contador[producto.nombre] += producto.cantidad;
    return contador;
  }, {});
  
  console.log('productos vendidos por tipo:', productosVendidos); // { Pizza: 3, Ensalada: 4, Pasta: 3 }
  