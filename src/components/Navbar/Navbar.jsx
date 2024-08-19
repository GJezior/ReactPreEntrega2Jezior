import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        
        <nav className='navbar'>

            <div className='navbar-logo'>

                <p>OverDrive</p>

            </div>

            <div className='navbar-links'>

                <ul>

                    <li>
                        <a href="">HOME</a>
                    </li>
                    <li>
                        <a href="">ACERCA DE</a>
                    </li>
                    <li>
                        <a href="">SALA DE ENSAYO</a>
                    </li>
                    <li>
                        <a href="">CONTACTO</a>
                    </li>

                </ul>

            </div>

            <CartWidget/>

        </nav>
        
    )
}

export default Navbar;