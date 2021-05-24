import Header from './Header.js'
import Footer from './Footer.js'

function Contacto() {
    return( <>

                <Header />
                <div className="contenedor">
                        <div className="bloques">
                        <form className="formulario">
                            <fieldset>
                            <legend className="titulo">Contactanos llenando todos los campos</legend>
                                <div className="caja-campos">
                                    
                                    <div className="campo">
                                        <label className="label">Nombre</label>
                                        <input className="input-text" type="text" id="nombre" placeholder="Tu Nombre"/>
                                    </div>
                                    
                                    <div className="campo">
                                        <label className="label">E-Mail</label>
                                        <input className="input-text" type="email" id="email" placeholder="Tu E-mail"/>
                                    </div>

                                    <div className="campo">
                                        <label className="label">Teléfono</label>
                                        <input className="input-text" type="tel" id="tel" placeholder="Tu Teléfono"/>
                                    </div>

                                    <div className="campo">
                                        <label className="label">Mensaje</label>
                                        <input className="mensaje" type="textarea" id="textarea"/>
                                    </div>
                                </div>
                                <div className="alinear-derecha">
                                    <input className="boton-enviar" type="submit" value="Enviar"/>
                                </div>
                            </fieldset>
                        </form>

                        <section className="contacto-texto">
                            <h2>Contacto</h2>
                            <p><span className="bold">Tienda Horario de Atención al público:</span> <br></br>Lunes a Sábados de 10 a 19 hs.</p>
                            <p><span className="bold">Dirección: Calle Falsa 123, Local 30, Galería Río de la Plata.</span><br></br> CABA, Buenos Aires, Argentina.</p>
                            <p><span className="bold">Consultas Generales Whatsapp 152345-6789</span><br></br> Lunes a Sábado de 10 a 19 hs.</p>
                            <p><span className="bold">Venta Online Whatsapp: 152323-1125</span><br></br> Lunes a Sábado de 10 a 19 hs</p>
                        </section>
                    </div>    
                </div>

                
                <Footer />
            </>
    )
}


export default Contacto;