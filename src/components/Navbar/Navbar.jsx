import './navBar.css'
import { Link } from 'react-router-dom';

import Logo from '../../imagenes/logos/FelCan.png';
import Carrito from './Cart/Cart';

const NavBar = ()=>{
    return(
        <div className='navBar'>
            <ul>
                <li className='nav-img_logo'>
                    <img src={Logo} alt='Logo FelCan' />
                </li>
            </ul>
            <ul className="nav-ul">
                <Link to='/' className="nav-ul_li">Inicio</Link>
                <Link to='/Products' className="nav-ul_li">Productos</Link>
                <Link to='/Contact' className="nav-ul_li">Contacto</Link>
                <Carrito />
          </ul>
        </div>
    )
}


export default NavBar;