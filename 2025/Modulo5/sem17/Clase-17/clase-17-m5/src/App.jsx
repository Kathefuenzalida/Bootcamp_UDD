import "./App.css";
import { Contador } from "./components/Contador";
import { FetchApi } from "./components/FetchApi";
import { MyComponent } from "./components/MyComponent";

function App() {
  const props = {
    job: "Desarrolladora",
    name: "Maria",
    lastname: "Perez",
    age: 22,
    adult: true,
    hobbies: ["Leer", "jugar videojuegos", "Programar"],
    address: { street: "Av. Siempre Viva", number: 742, city: "Springfield" },
  };
  return (
    <div>
      <MyComponent {...props} />
      <Contador />
      <FetchApi />
    </div>
  );
}

export default App;

// EJERCICIO 1: Traspasa el resto de los datos hacia App.jsx y pasalos a traves de props a MyComponent.jsx
// tal como se hizo con la propiedad job. (10 minutos)

// EJERCICIO 2: Utiliza el atributo 'disabled' de la etiqueta button para agregar una condicion que permita
// deshabilitar el boton cuando el contador sea igual a cero.

// EJERCICIO 3: Agrega debajo del nombre de cada usuario su direccion correspondiente en este formato (10 minutos):
// city, state, country
// Ejemplo:
// Mr Jimmy Harris
// Geraldton, Western Australia, Australia