import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        
        <nav className='navbar'>

            <div className='navbar-logo'>

                <p>OverDrive</p>

            </div>

            <div className='navbar-container'>

                <ul className='navbar-links'>

                    <li>
                        <a href="#" className='link'>FENDER</a>
                    </li>
                    <li>
                        <a href="#" className='link'>GIBSON</a>
                    </li>
                    <li>
                        <a href="#" className='link'>IBANEZ</a>
                    </li>

                </ul>

            </div>

            <CartWidget/>

        </nav>
        
    )
}

export default Navbar;