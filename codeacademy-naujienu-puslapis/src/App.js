import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarPage from './Pages/CarPage';
import CitiesPage from './Pages/CitiesPage';
import CodeAcademyNews from './Pages/CodeAcademyNews';
import Counter from './Pages/Counter';
import TodoPage from './Pages/TodoPage';

function App() {
  return (

    <>
      <Routes>
        <Route path='NewsPage' element={<CodeAcademyNews />} />
        <Route path='Counter' element={<Counter />} />
        <Route path='CarPage' element={<CarPage />} />
        <Route path='CitiesPage' element={<CitiesPage />} />
        <Route path='TodoPage' element={<TodoPage />} />
      </Routes>
    </>

  );
}

export default App;
