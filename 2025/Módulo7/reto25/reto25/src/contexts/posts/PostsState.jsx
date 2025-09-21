import React, { useEffect, useReducer } from 'react';
import PostsContext from './PostsContext';
import PostsReducer from './PostsReducer';

// Función para cargar el estado desde localStorage
const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem('blog_posts_state');
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.error("Error leyendo localStorage:", error);
  }
  return {
    posts: [
      {
        id: 'seed-1',
        title: 'Primer post',
        body: 'Hola, este es el post de bienvenida.',
        comments: [
          { id: 'c1', text: '¡Bienvenida al blog!', date: new Date().toISOString() },
        ],
      },
    ],
  };
};

// Generador de IDs simples
const genId = () => String(Date.now() + Math.random());

const PostsState = ({ children }) => {
  const initialState = loadFromStorage();
  const [state, dispatch] = useReducer(PostsReducer, initialState);

  // Guardar en localStorage cada vez que cambia el estado
  useEffect(() => {
    try {
      localStorage.setItem('blog_posts_state', JSON.stringify(state));
    } catch (error) {
      console.error("Error guardando en localStorage:", error);
    }
  }, [state]);

  // Actions
  const addPost = ({ title, body }) => {
    const newPost = { id: genId(), title, body, comments: [] };
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  const updatePost = ({ id, title, body }) => {
    const existing = state.posts.find(p => p.id === id);
    const updated = { id, title, body, comments: existing?.comments ?? [] };
    dispatch({ type: 'UPDATE_POST', payload: updated });
  };

  const deletePost = id => dispatch({ type: 'DELETE_POST', payload: id });

  const addComment = (postId, text) => {
    const comment = { id: genId(), text, date: new Date().toISOString() };
    dispatch({ type: 'ADD_COMMENT', payload: { postId, comment } });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        addPost,
        updatePost,
        deletePost,
        addComment,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsState;
