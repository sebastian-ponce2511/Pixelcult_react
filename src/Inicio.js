
// import './styles.css';
// import Navlinks from './Navlinks.js';
import Header from './Header.js'
import BannerIconos from './BannerIconos.js'
import ProductosLista from './ProductosLista.js';
import Categorias from './Categorias.js';
import Footer from './Footer.js'
import './app.scss';  //Compila sin tener que cambiar de consola


function Inicio() {
    
    return (
      <div id="pagina">

          <Header />
    
            <main>
                 
                 <BannerIconos />
        
                <section className="destacados contenedor">
                    <h2>Productos Destacados</h2>
                    
        
                    <ProductosLista />            

                    {/* <button className="boton_productos">
                            <a href="#x">
                                Ver Más
                            </a>
                    </button>  */}
        
                    
        
                </section>
        
                <section className="categorias contenedor">
                <h2 className="categorias_titulo">Categorias</h2>
                    
                    <Categorias />
                        
                </section>
                
        
            </main>
  
      <Footer />            
      
  </div>
    
    );
  }
  
  
  
  export default Inicio;


            

            
            
            
