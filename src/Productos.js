import Header from './Header.js'
import Footer from './Footer.js'
import ArrayProductos from './ArrayProductos.js'
import {Link} from 'react-router-dom'

function Productos(props) {
   
   
    var listaProd = ArrayProductos.filter(cat => cat.categoria == props.categoria) 



    return (
        <>
            
                <div className="cajaRemeras contenedor">                          
            
                {
                    listaProd.map(function(dato) {
                        return  <div className="productosRemeras" key={dato.id}> 
                            <div className="cajaRemeras_productos">
                                <Link to={`/productos/${dato.id}`}>
                                    <div className={dato.divclass}>
                                        <img src={dato.foto} alt={dato.alt}/>
                                        <p className="descripcion">{dato.texto}</p>
                                            <div className="precio">
                                                <a href="#x">
                                                    <p className="comprar">Comprar</p>
                                                </a>
                                                <p className="monto">{dato.precio}</p>
                                            </div> 
                               
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    })
                } 
                
                </div>
                
            </>
    )
}

export default Productos