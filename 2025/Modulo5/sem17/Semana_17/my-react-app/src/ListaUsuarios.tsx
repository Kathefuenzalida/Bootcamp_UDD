import { useEffect, useState } from 'react';

interface Usuario {
  id: number;
  nombre: string;
}

interface UsuarioAPI {
  id: number;
  name: string;
}

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[] | null>(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data: UsuarioAPI[]) => {
        const usuariosTransformados: Usuario[] = data.map((u) => ({
          id: u.id,
          nombre: u.name,
        }));
        setUsuarios(usuariosTransformados);
      });
  }, []);

  // Filtramos usuarios según el texto ingresado
  const usuariosFiltrados = usuarios?.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Lista de Usuarios</h2>

      <input
        type="text"
        placeholder="Buscar usuario..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {usuarios ? (
        <ul>
          {usuariosFiltrados && usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((usuario) => (
              <li key={usuario.id}>{usuario.nombre}</li>
            ))
          ) : (
            <li>No se encontraron usuarios.</li>
          )}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ListaUsuarios;
