import './App.css';
import "https://kit.fontawesome.com/3b40111a1a.js";
import { Tarjeta } from './components/Tarjeta/Tarjeta';
import { Navbar } from './components/Navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Titulo } from './components/Titulo/Titulo';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Favorito } from './components/Favorito/Favorito';
import { Producto } from './components/Item-producto/Producto';

function App() {

  const [favorito,setfavorito] = useState(0);

  const sumar = () => {
      setfavorito(favorito+1);
  }

  return (
    <div className='App'>

      <BrowserRouter>

      <Titulo/>

      <Navbar numero={favorito}/>

      <Routes>
        <Route path='/' element={<Tarjeta funcion={sumar}/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/favorito' element={<Favorito/>}/>
        <Route path='/producto/:id' element={<Producto funcion={sumar}/>}/>
        <Route path='/:categoria' element={<Tarjeta funcion={sumar}/>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
