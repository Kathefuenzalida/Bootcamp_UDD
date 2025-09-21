import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsState from './contexts/posts/PostsState';
import NavBar from './components/Layout/NavBar';
import PostList from './components/Posts/PostList';
import PostForm from './components/Posts/PostForm';
import PostDetail from './components/Posts/PostDetail';
import './App.css';

export default function App() {
  return (
    <PostsState>
      <BrowserRouter>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/edit/:id" element={<PostForm />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </PostsState>
  );
}