import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main'
//Компонент App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
