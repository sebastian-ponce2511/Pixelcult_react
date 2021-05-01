import links from './links.js';


function Navlinks() {
    return(
        <div className="links">

            {
                links.map(function(link) { 
                    return  <a href={link.href} className={link.clase}>{link.nombre}</a>
                    
                })
            }
                        
        </div>
    )
}

export default Navlinks;




