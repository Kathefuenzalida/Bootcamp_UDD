import React from 'react';
import useFetch from './useFetch';

function CharacterList() {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Personajes</h2>
      <ul>
        {data.results.map((personaje) => (
          <li key={personaje.id}>{personaje.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;