import Header from './Header.js'
import Footer from './Footer.js'

function Error404 () {
    return (
        <>

            <Header />
            <div className="error contenedor">
            <img src="images/Error.png" alt="error"/>
            </div>
            <Footer />

        </>
    )
}


export default Error404;