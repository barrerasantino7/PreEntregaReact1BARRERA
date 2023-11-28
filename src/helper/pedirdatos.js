import data from "../data/data.json"

export const pedirDatos = () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() =>{
            resolve(data);
        }, 250)
    })
}

export const pedirProducto = (id) =>{
    return new Promise ((resolve, reject) =>{

        const producto = data.find((el) => el.id === id)

        if (producto){
            resolve(producto)
        }
    })
}