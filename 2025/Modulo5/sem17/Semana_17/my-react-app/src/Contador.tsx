import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor actual: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default Contador;