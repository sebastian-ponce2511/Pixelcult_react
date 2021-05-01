import lista from './lista.js'


function ProductosLista() {
    return (
        <div className="productos">

            {
                lista.map(function(dato) {
                    return <div class={dato.divclass}>
                    <a href="#x">
                        <img src={dato.foto} alt={dato.alt}/>
                    </a>
                    <p class="descripcion">{dato.texto}</p>
                    <div class="precio">
                        <a href="#x">
                            <p class="comprar">Comprar</p>
                        </a>
                        <p class="monto">{dato.precio}</p>
                    </div> 
                </div>
                })
            }

        </div>
    )
}



export default ProductosLista;