import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.css";
export const Navbar = ()=> {
    return (
        <nav className="navbar" >
            <div className="superior_navegador">
                <ul className="navegador_lista">
                    <li><a className="lista-enlace" href="#">Sobre Nosotros</a></li>
                    <li><a className="lista-enlace" href="#">Inicio</a></li>
                    <li><CartWidget/></li>
                </ul>
            </div>

            <div className="inferior_navegador">
                <ul className="navegador_lista">
                    <li className="lista-elemento">
                        <a href="#" className="circulo"></a>
                        <a className="lista-enlace" href="#">Autos</a>
                    </li>
                    <li className="lista-elemento">
                        <a href="#" className="circulo"></a>
                        <a className="lista-enlace" href="#">Motos</a>
                    </li>
                    <li className="lista-elemento">
                        <a href="#" className="circulo"></a>
                        <a className="lista-enlace" href="#">Camiones</a>
                    </li>
                    <li className="lista-elemento">
                        <a href="#" className="circulo"></a>
                        <a className="lista-enlace" href="#">Motorhome</a>
                    </li>
                    <li className="lista-elemento">
                        <a href="#" className="circulo"></a>
                        <a className="lista-enlace" href="#">Electricos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

/*Todos los circulos grises van a ser imagenes en un futuro*/ 