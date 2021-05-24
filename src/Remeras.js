import Header from './Header.js'
import Footer from './Footer.js'
import {useEffect} from 'react'
import Productos from './Productos.js'

function Remeras() {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <>
            <Header />

            <Productos categoria="1" />
                
            <Footer />
        </>
    )
}


export default Remeras;