import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">

            {
                 <div className="contenedor">
                    <div className="barra">
                        <div className="logo">
                            <Link to="/">
                                <img src="images/logo.png" alt="logo pixelcult"/>
                            </Link>
                        </div>
        
                        <nav className="navegacion">
                              <ul>
                                  <li className="item"><Link to="/">Inicio</Link></li>
                                  <li className="item"><a href="#x">Productos</a>
                                  
                                      <ul className="submenu">
                                          <li><Link to="/Remeras">Remeras</Link></li>
                                          <li><Link to="#x">Gorras</Link></li>
                                          <li><Link to="/Tazas">Tazas</Link></li>
                                          <li><Link to="#x">Cuadros</Link></li>
                                      </ul>
                                  
                                  </li>
                                  <li className="item"><Link to="/Contacto">Contacto</Link></li>
                                  <li className="item"><Link to="#x">Creá tu cuenta</Link></li>
                                  <li className="item"><Link to="#x">Ingresá</Link></li>
                              </ul>

                            <a href="#carrito">
                                <div className="carrito">
                                <img src="images/carrito_rojo1.png" alt="carrito"/>
                                </div>
                            </a>
                        </nav>
                    </div> 
                </div>
                }
            

        </header>
    )
}

export default Header;