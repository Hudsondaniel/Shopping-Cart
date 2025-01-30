import { Link } from "react-router-dom";
import '../CSS/navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-container ">
            <h1 className="nav-heading">CartBliss</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link-inner" >Home</Link>
                <Link to="/shop" className="nav-link-inner">Shop</Link>
                <Link to="/cart" className="nav-link-inner">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;
