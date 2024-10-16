import { Container } from '@mui/material';
import './App.css';
import TodoPage from './Pages/TodoPage';

function App() {
  return (
    <Container maxWidth="sm" sx={{mt: 5}} className="App">
      <TodoPage/>
    </Container>
  );
}

export default App;
