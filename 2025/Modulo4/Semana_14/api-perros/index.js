const axios = require('axios');

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    console.log("🐶 Imagen aleatoria de perrito:");
    console.log(response.data.message); // solo muestra la URL de la imagen
  })
  .catch(error => {
    console.error("❌ Ocurrió un error al obtener la imagen:", error.message);
  });