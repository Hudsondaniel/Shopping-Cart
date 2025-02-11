import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import useCartStore from "../Store/useCartStore";
import "../CSS/cart.css";
import Footer from "../components/Footer";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <div>
            <Navbar />
            <div className="cart-container">
                {cart.length === 0 ? (
                    <p>Your Cart Is Empty!</p>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <CartItem key={item.id || index} item={item} />
                        ))}
                        <div className="clear-checkout">
                            <button onClick={clearCart}>Clear Cart</button>
                            <button>Checkout</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
