import datosCategorias from './datosCategorias.js'
import {Link} from 'react-router-dom'


function Categorias() {
    return (
        <div className="caja_categorias">

            {
                datosCategorias.map(function(dato) {
                    return <div className={dato.clase}>
                    <Link to={dato.link}>
                        <h2>{dato.nombre}</h2>
                    </Link>
                </div>
                })
            }

        </div>
    )
}

export default Categorias;