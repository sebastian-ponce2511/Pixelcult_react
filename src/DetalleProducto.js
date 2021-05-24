import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import ArrayProductos from './ArrayProductos.js'




function DetalleProducto() {
    
    var {id} = useParams()

    var [producto, setProducto] = useState({})    

    useEffect(()=>{

        var resultado = ArrayProductos.find(function(dato){
        if (dato.id == id) {
          return true 
        } 

         return false
    }) 

    setProducto(resultado)

 })

    return (
        <>
        <Header />
        <div className="cajaRemeras contenedor">
            <div className={producto.divclass} key={producto.id}>
                <img src={producto.foto} alt={producto.alt}/>
                <p className="descripcion">{producto.texto}</p>
                <div className="precio">
                <a href="#x">
                    <p className="comprar">Comprar</p>
                </a>
                <p className="monto">{producto.precio}</p>
                </div> 
            </div>
        </div>     
        <Footer />      
        </>     
                    
               
              
            
        
    )
}



export default DetalleProducto;