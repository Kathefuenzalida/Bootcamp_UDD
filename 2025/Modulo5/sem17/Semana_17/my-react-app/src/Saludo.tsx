// src/Saludo.tsx
import React from 'react';

// Declaramos la interfaz que define las props esperadas
interface Props {
  nombre: string;
}

const Saludo: React.FC<Props> = ({ nombre }) => {
  return <p>Hola, {nombre}!</p>;
};

export default Saludo;
