const PostsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = action.payload;
      return { ...state, posts: [newPost, ...state.posts] };
    }
    case 'UPDATE_POST': {
      const updated = action.payload;
      return {
        ...state,
        posts: state.posts.map(p => (p.id === updated.id ? updated : p)),
      };
    }
    case 'DELETE_POST': {
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload) };
    }
    case 'ADD_COMMENT': {
      const { postId, comment } = action.payload;
      return {
        ...state,
        posts: state.posts.map(p =>
          p.id === postId ? { ...p, comments: [...p.comments, comment] } : p
        ),
      };
    }
    default:
      return state;
  }
};

export default PostsReducer;
