import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Productos from './Productos.js'



function DetalleProducto() {
    
    var {id} = useParams()

    var [producto, setProducto] = useState({})    

    useEffect(()=>{

        var resultado = Productos.find(function(dato){
        if (dato.id == id) {
          return true 
        } 

         return false
    }) 

    setProducto(resultado)

 })

    return (
        <div className={producto.divclass}>
                                <img src={producto.foto} alt={producto.alt}/>
                                <p className="descripcion">{producto.texto}</p>
                                <div className="precio">
                                    <a href="#x">
                                        <p className="comprar">Comprar</p>
                                    </a>
                                    <p className="monto">{producto.precio}</p>
                                </div> 
                            </div>
                        
                    
               
              
            
        
    )
}



export default DetalleProducto;