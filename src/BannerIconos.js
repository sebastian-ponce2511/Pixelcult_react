import {Link} from 'react-router-dom'

function BannerIconos () {
    return (
        <>
        
            <div className="banner">
                    <div className="contenido_texto">
                        <h1 className="texto_banner">Nuevos modelos en stock!</h1>
                        <button className="boton_banner">
                            <Link to="/Remeras">
                                Conseguilos!
                            </Link>
                        </button>    
                    </div>
                </div>
        
                <div className="barra_items">
                    <div className="caja_iconos contenedor">
                        <div className="icono">
                            <img src="images/compra.png" alt="compra"/>
                            <p>Compra segura - 10 días</p>
                        </div>
                        <div className="icono">
                            <img src="images/envios.png" alt="envios"/>
                            <p>Envíos a todo el país</p>
                        </div>
                        <div className="icono">
                            <img src="images/pago.png" alt="pago"/>
                            <p>Medios de pago</p>
                        </div>    
                    </div>
                </div>
        
        </>
    )
}

export default BannerIconos;