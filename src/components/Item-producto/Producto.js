import { useEffect, useState } from "react"
import { pedirProducto } from "../../helper/pedirdatos";
import { useParams } from "react-router-dom";
import "./producto.css"
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
        <div className="detalle">
            {producto && 

            <div className="detalle_producto" key={producto.id}>


            <img className="producto-img" src={producto.imagen} alt={producto.nombre}/>

            <div className="producto_contenido">

                <div className="contenido_informacion">
                    <h3 className="informacion-nombre">{producto.nombre}</h3>
                    <div className="informacion_datos">
                       <p>Modelo: {producto.año}</p>
                       <p>{producto.km} KM</p>
                       <p>Precio: {producto.precio}</p>
                    </div>
                    <p className="producto-info">{producto.info}</p>
                </div>
        
                <div className="contenido-btn">
                    <button className="btn" onClick={props.funcion}>Añadir a favoritos <i class="fa-solid fa-star"></i></button>
                </div>
            </div>
        
            </div>}
        </div>
    )
}