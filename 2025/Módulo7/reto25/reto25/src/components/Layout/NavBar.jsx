import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">MiniBlog</Link>
      <div className="links">
        <NavLink to="/" end>Publicaciones</NavLink>
        <NavLink to="/new">Nueva</NavLink>
      </div>
    </nav>
  );
}