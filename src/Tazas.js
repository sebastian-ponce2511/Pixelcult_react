import Header from './Header.js'
import Footer from './Footer.js'
import ListaTazas from './ListaTazas.js'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

function Tazas() {

    var {id} = useParams()

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <>
            <Header />
                <div className="cajaRemeras contenedor">                          
            
                {
                    ListaTazas.map(function(dato) {
                        return  <div className="productosRemeras"> 
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
                {/* <button className="boton_productos">
                                <a href="#x">
                                    Ver Más
                                </a>
                        </button>  */}
                
                </div>
                <Footer />
            </>
    )
}


export default Tazas;