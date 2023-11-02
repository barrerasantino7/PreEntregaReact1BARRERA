import "./Tarjeta.css";
import raptor from "../../img/raptor.jpg"

export const Tarjeta = (props) =>{
    return (
        <div className="tarjeta">

            <img className="tarjeta-img" src={raptor}></img>

            <div className="tarjeta_contenido">
                <h3>Ford Raptor F-150</h3>
                <p>Precio: 75.000</p>
                <p>Esto va a ser una breve descripción del vehiculo.</p>
            </div>

            <div className="tarjeta-btn">
                <button className="btn">Añadir a favoritos <i class="fa-solid fa-star"></i></button>
            </div>
            
        </div>
    )
}