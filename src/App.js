import './App.css';
import "https://kit.fontawesome.com/3b40111a1a.js";
import { Tarjeta } from './components/Tarjeta/Tarjeta';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>

      <h1 className='title'>OnlyCars</h1>

      <Navbar/>

      <main>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
      </main>

    </div>
  );
}

export default App;
