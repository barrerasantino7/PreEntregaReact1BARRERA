import "./Tarjeta.css";
import { useEffect, useState,} from "react";
import { Link, useParams } from "react-router-dom";
import { pedirDatos } from "../../helper/pedirdatos";

export const Tarjeta = (props) =>{

    const [productos, setProductos] = useState([]);
    const categoria= useParams().categoria;

    useEffect(()=> {
        pedirDatos()
        .then((res) =>{
            if (categoria){
                setProductos( res.filter((prod)=> prod.categoria === categoria));
            } else {
                setProductos(res);
            }

        })
    },[categoria]) 


    return (
        <>
        <main className='cuerpo'>
        {
            productos.map((producto) => {
                return (

                <div className="tarjeta" key={producto.id}>
                    <img className="tarjeta-img" src={producto.imagen} alt={producto.nombre}/>
        
                    <div className="tarjeta_contenido">
                        <h3>{producto.nombre}</h3>
                        <p className="contenido-precio">Precio: {producto.precio}</p>
                        <div className="contenido-km-año">
                        <p>{producto.km} Km</p>
                        <p>{producto.año}</p>
                        </div>
                    </div>
        
                    <div className="tarjeta-btn">
                        <Link to={`/producto/${producto.id}`} className="btn">Ver más</Link>
                        <button className="btn" onClick={props.funcion}>Añadir a favoritos <i class="fa-solid fa-star"></i></button>
                    </div>
         
                </div>
                )
            })

        }
        </main>
        </>
    )
}