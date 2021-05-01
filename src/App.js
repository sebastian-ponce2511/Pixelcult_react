
import './App.css';
import Navlinks from './Navlinks.js';
import ProductosLista from './ProductosLista.js';
import Categorias from './Categorias.js';


function App() {
    
    return (
      <div id="pagina">
      <header className="header">
          <div className="contenedor">
              <div className="barra">
                  <div className="logo">
                      <a href="index.html">
                          <img src="logo.png" alt="logo pixelcult"/>
                      </a>
                  </div>
  
                  <nav className="navegacion">
  
                      <Navlinks />
                      
                      <a href="#carrito">
                          <div className="carrito">
                          <img src="/carrito_rojo1.png" alt="carrito"/>
                          </div>
                      </a>
                  </nav>
              </div> 
          </div>
      </header>
                      
                      
      <main>
          <div className="banner">
              <div className="contenido_texto">
                  <h1 className="texto_banner">Nuevos modelos en stock!</h1>
                  <button className="boton_banner">
                      <a href="#x">
                          Conseguilos!
                      </a>
                  </button>    
              </div>
          </div>
  
          <div className="barra_items">
              <div className="caja_iconos contenedor">
                  <div className="icono">
                      <img src="compra.png" alt="compra"/>
                      <p>Compra segura - 10 días</p>
                  </div>
                  <div className="icono">
                      <img src="envios.png" alt="envios"/>
                      <p>Envíos a todo el país</p>
                  </div>
                  <div className="icono">
                      <img src="pago.png" alt="pago"/>
                      <p>Medios de pago</p>
                  </div>    
              </div>
          </div> 
  
          <section className="destacados contenedor">
              <h2>Productos Destacados</h2>
              
  
              <ProductosLista />            
  
              
  
          </section>
  
          <section className="categorias contenedor">
              <h2 className="categorias_titulo">Categorias</h2>
              
              <Categorias />
                  
          </section>
          
  
      </main>
  
                  
      <footer>
          <div className="contenido_footer contenedor">
              <div className="formulario">
                  <h3>Recibí las últimas ofertas y novedades</h3>
                  <div className="campo">
                      <input type="text"/>
                      <button className="boton_formulario">Suscribirme</button>
                  </div>
              </div>
  
              <div className="segundo_nav">
                  <a href="#x">
                  <img src="logo_footer.png" alt="Logo"/>
                  </a>
                  <nav className="nav_footer">
                      <a href="#x">Inicio</a>
                      <a href="#x">Remeras</a>
                      <a href="#x">Tazas</a>
                      <a href="#x">Cuadros</a>
                  </nav>
                  <div className="redes">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <rect x="4" y="4" width="16" height="16" rx="4" />
                          <circle cx="12" cy="12" r="3" />
                          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                      
                        
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                        </div>
                  
              </div>
  
              <p className="copy">2021 Pixelcult ® - Todos los derechos reservados</p>
  
          </div>  
      </footer>
  </div>
    
    );
  }
  
  
  
  export default App;


            

            
            
            
