import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex ">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
