import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul
       style={{
        display: 'flex',
        gap: '1rem',
        listStyle: 'none'
       }}
      >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
        </li>
        <li>
          <Link to='/contacto'>Contacto</Link>
        </li>
        <li>
          <Link to='/productos'>Productos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header

// EJERCICIO 2
// Sustituye todas las etiquetas <a> por el componente <Link> de react-router-dom.
// Utiliza la prop `to` para establecer la ruta de navegación correspondiente,
// asegurándote de que coincida con las rutas declaradas en tu componente Router.