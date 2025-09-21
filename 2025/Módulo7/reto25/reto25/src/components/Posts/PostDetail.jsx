import { useContext, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import PostsContext from '../../contexts/posts/PostsContext';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, addComment } = useContext(PostsContext);
  const post = posts.find(p => p.id === id);

  const [text, setText] = useState('');

  if (!post) return (
    <div>
      <p>La publicación no existe.</p>
      <button onClick={() => navigate('/')}>Volver</button>
    </div>
  );

  const handleAdd = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addComment(post.id, text.trim());
    setText('');
  };

  return (
    <article className="detail">
      <h2>{post.title}</h2>
      <p className="body">{post.body}</p>
      <div className="detail-actions">
        <Link to={`/edit/${post.id}`}>Editar</Link>
        <Link to="/">Volver</Link>
      </div>

      <section className="comments">
        <h3>Comentarios ({post.comments.length})</h3>
        {post.comments.length === 0 && <p>Aún no hay comentarios.</p>}
        <ul>
          {post.comments.map(c => (
            <li key={c.id}>
              <span>{c.text}</span>
              <time dateTime={c.date}>
                {new Date(c.date).toLocaleString()}
              </time>
            </li>
          ))}
        </ul>

        <form className="comment-form" onSubmit={handleAdd}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Escribe un comentario…"
          />
          <button type="submit">Agregar</button>
        </form>
      </section>
    </article>
  );
}
