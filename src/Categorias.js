import datosCategorias from './datosCategorias.js'


function Categorias() {
    return (
        <div className="caja_categorias">

            {
                datosCategorias.map(function(dato) {
                    return <div className={dato.clase}>
                    <a href="#x">
                        <h2>{dato.nombre}</h2>
                    </a>
                </div>
                })
            }

        </div>
    )
}

export default Categorias;