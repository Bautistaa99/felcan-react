import CarritoCompras from '../../../imagenes/carritoDeCompras/Carrito.png'



const Carrito = ()=>{
    return(
        <li className="nav-ul_li">
        <button className="nav-carrito-boton" id="open" href="App.js"><img src={CarritoCompras} alt="" /><span id="contador-carrito">0</span></button>
        </li>
    )
}

export default Carrito;