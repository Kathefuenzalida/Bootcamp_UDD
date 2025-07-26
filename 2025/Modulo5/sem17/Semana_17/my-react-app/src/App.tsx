// src/App.tsx
import ErrorBoundary from './ErrorBoundary';
import ErrorComponent from './components/ErrorComponent';
import ListaUsuarios from './ListaUsuarios';
import Contador from './Contador';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Ejemplo general de la app</h1>

      <hr />
      <h2>1️⃣ Lista de Usuarios (useEffect)</h2>
      <ListaUsuarios />

      <hr />
      <h2>2️⃣ Contador (useState)</h2>
      <Contador />

      <hr />
      <h2>3️⃣ Error Boundary</h2>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
