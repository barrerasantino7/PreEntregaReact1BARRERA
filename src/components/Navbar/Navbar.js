import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.css";


export const Navbar = (props)=> {

    return (
        <nav className="navbar" >
            <div className="superior_navegador">
                <ul className="navegador_lista">
                    <li><Link className="lista-enlace" to="/nosotros">Sobre Nosotros</Link></li>
                    <li><Link className="lista-enlace" to="/">Inicio</Link></li>
                    <li><CartWidget numero={props.numero}/></li>
                </ul>
            </div>

            <div className="inferior_navegador">
                <ul className="navegador_lista">
                    <li className="lista-elemento">
                        <Link className="lista-enlace" to="/auto">Autos</Link>
                    </li>
                    <li className="lista-elemento">
                        <Link className="lista-enlace" to="/moto">Motos</Link>
                    </li>
                    <li className="lista-elemento">
                        <Link className="lista-enlace" to="/camion">Camiones</Link>
                    </li>
                    <li className="lista-elemento">
                        <Link className="lista-enlace" to="/motorhome">Motorhome</Link>
                    </li>
                    <li className="lista-elemento">
                        <Link className="lista-enlace" to="/electrico">Electricos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

/*Todos los circulos grises van a ser imagenes en un futuro*/ 