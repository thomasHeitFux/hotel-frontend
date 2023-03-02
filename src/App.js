import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Registrar } from './pages/Registrar';
import { Gastos } from './components/gastos';
// import './index.css';



function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route exact path="/create" element={<Registrar/>}></Route>
        <Route exact path="/" element={<Gastos/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
