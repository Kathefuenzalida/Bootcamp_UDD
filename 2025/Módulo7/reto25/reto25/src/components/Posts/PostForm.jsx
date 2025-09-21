import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostsContext from '../../contexts/posts/PostsContext';

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, addPost, updatePost } = useContext(PostsContext);

  const editing = Boolean(id);
  const found = editing ? posts.find(p => p.id === id) : null;

  const [title, setTitle] = useState(editing ? found?.title ?? '' : '');
  const [body, setBody] = useState(editing ? found?.body ?? '' : '');

  useEffect(() => {
    if (editing && !found) {
      navigate('/'); // si no existe el post
    }
  }, [editing, found, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    if (editing) {
      updatePost({ id, title: title.trim(), body: body.trim() });
    } else {
      addPost({ title: title.trim(), body: body.trim() });
    }
    navigate('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{editing ? 'Editar publicación' : 'Nueva publicación'}</h2>
      <label>
        Título
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título"
        />
      </label>
      <label>
        Contenido
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          rows={8}
          placeholder="Contenido"
        />
      </label>
      <div className="actions">
        <button type="submit">{editing ? 'Guardar cambios' : 'Crear'}</button>
        <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
      </div>
    </form>
  );
}
