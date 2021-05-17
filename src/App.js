
// import './styles.css';
// import Navlinks from './Navlinks.js';
//import Header from './Header.js'
//import BannerIconos from './BannerIconos.js'
//import ProductosLista from './ProductosLista.js';
//import Categorias from './Categorias.js';
//import Footer from './Footer.js'
import './app.scss';  //Compila sin tener que cambiar de consola
import Inicio from './Inicio.js'
import Remeras from './Remeras.js'
import Tazas from './Tazas.js'
import DetalleProducto from './DetalleProducto.js'
import Error404 from './Error404' 
import {
    BrowserRouter as Router,
    Route,
    Switch,    
} from "react-router-dom";
import {useEffect} from 'react'

function App() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (

        <Router>
            <Switch>

                <Route path="/remeras">
                    <Remeras />
                </Route>

                <Route path="/Tazas">
                    <Tazas />
                </Route>

                <Route path="/productos/:id">
                    <DetalleProducto /> 
                </Route>

                <Route path="/" exact>
                    <Inicio />
                </Route>


                <Route path="*">
                    <Error404 />
                </Route>

            </Switch>
        </Router>
    );
  }
  
  
  
  export default App;


            

            
            
            
