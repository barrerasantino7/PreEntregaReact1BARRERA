import "https://kit.fontawesome.com/3b40111a1a.js";
import { Link } from "react-router-dom";
export const CartWidget = (props) =>{

    return (
        <Link className="lista-enlace" to="/favorito">Mis Favoritos <i class="fa-solid fa-star">{props.numero}</i></Link>
    )
} 