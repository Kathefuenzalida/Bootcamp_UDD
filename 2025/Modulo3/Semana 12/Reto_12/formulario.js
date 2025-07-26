document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('button');
  let seleccionados = [];

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      // Mostrar temporalmente el botón si está oculto (por comparación previa fallida)
      boton.style.visibility = 'visible';

      // Guardar el botón seleccionado
      seleccionados.push(boton);

      // Solo queremos 2 seleccionados a la vez
      if (seleccionados.length === 2) {
        const [boton1, boton2] = seleccionados;

        const color1 = getComputedStyle(boton1).backgroundColor;
        const color2 = getComputedStyle(boton2).backgroundColor;

        if (color1 === color2) {
          // Son iguales: los ocultamos
          setTimeout(() => {
            boton1.style.visibility = 'hidden';
            boton2.style.visibility = 'hidden';

            // ✅ Verificamos si quedan botones visibles
            const visibles = Array.from(botones).filter(b => getComputedStyle(b).visibility !== 'hidden');
            if (visibles.length === 0) {
              console.log('¡Todos los botones ocultos! Mostrando mensaje...');
              document.getElementById('mensaje').textContent = '¡Felicidades! Has terminado el juego 🎉';
            }
          }, 300);
        } else {
          // Son distintos: los "reaparecemos"
          setTimeout(() => {
            boton1.style.visibility = 'visible';
            boton2.style.visibility = 'visible';
          }, 1000);
        }

        seleccionados = [];
      } else {
        // Ocultar temporalmente el botón para simular que fue seleccionado
        boton.style.visibility = 'hidden';
      }
    });
  });
});