document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const nombre = document.querySelector('#nombre').value;
	const email = document.querySelector('#email').value;

	console.log(`Nombre: ${nombre}`);
	console.log(`Email: ${email}`);
});
const botonesVisibles = document.querySelectorAll('button:not([disabled])');
if (botonesVisibles.length === 0) {
  document.getElementById('mensaje').textContent = '¡Felicidades! Has terminado el juego 🎉';
}