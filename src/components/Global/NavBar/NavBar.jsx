import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {

    return (
        <>
            <header>
                <nav>
                    <ul className='ulNav'>
                        <li id='logoNav'><a href="#">9979 Store</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Promos</a></li>
                        <li><a href="#">Contacto</a></li>
                        <CartWidget/>
                    </ul>
                </nav>
            </header>    
        </>
    )
}

export default NavBar;