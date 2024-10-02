import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Users from './pages/Users'
import Search from './pages/Search'
import Albums from './pages/Albums';
import User from './pages/User';
import Post from './pages/Post';
import Album from './pages/Album';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='Home' element={<Home />}/>
        <Route path='Posts' element={<Posts/>}/>
        <Route path='Posts/:postId' element={<Post/>}/>
        <Route path='Users' element={<Users/>}/>
        <Route path='Users/:id' element={<User/>}/>
        <Route path='Albums' element={<Albums/>}/>
        <Route path='Albums/:albumId' element={<Album/>}/>
        <Route path='Search' element={<Search/>}/>
      </Routes>
    </>
  );
}

export default App;
