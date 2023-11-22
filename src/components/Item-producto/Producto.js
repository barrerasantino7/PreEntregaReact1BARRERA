import { useEffect, useState } from "react"
import { pedirProducto } from "../../helper/pedirdatos";
import { useParams } from "react-router-dom";

export  const Producto = (props) =>{
    const [producto, setProductos] = useState(null);

    const id= useParams().id;

    useEffect(()=>{
        pedirProducto(Number(id))
        .then((res) => {
            setProductos(res);
        })
    },[id])

    return (
        <div>
            {producto && 

            <div className="tarjeta" key={producto.id}>
                <img className="tarjeta-img" src={producto.imagen} alt={producto.nombre}/>
        
                <div className="tarjeta_contenido">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                    <p>{producto.info}</p>
                </div>
        
                <div className="tarjeta-btn">
                    <button className="btn" onClick={props.funcion}>Añadir a favoritos <i class="fa-solid fa-star"></i></button>
                </div>
        
            </div>}
        </div>
    )
}