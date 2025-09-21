import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PostsContext from '../../contexts/posts/PostsContext';

export default function PostList() {
  const { posts, deletePost } = useContext(PostsContext);

  if (!posts.length) return <p>No hay publicaciones. Crea la primera ✨</p>;

  return (
    <div className="grid">
      {posts.map(p => (
        <article key={p.id} className="card">
          <h3>{p.title}</h3>
          <p className="excerpt">
            {p.body.slice(0, 140)}
            {p.body.length > 140 ? '…' : ''}
          </p>
          <div className="actions">
            <Link to={`/post/${p.id}`}>Ver</Link>
            <Link to={`/edit/${p.id}`}>Editar</Link>
            <button onClick={() => deletePost(p.id)}>Eliminar</button>
          </div>
        </article>
      ))}
    </div>
  );
}
