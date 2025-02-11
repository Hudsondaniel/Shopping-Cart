import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import useCartStore from "../Store/useCartStore";
import "../CSS/cart.css";
import Footer from "../components/Footer";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

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

                        {/* Total Cart Value Container */}
                        <div className="cart-total">
                            <h3>Total Cart Value: ${calculateTotal()}</h3>
                        </div>

                        <div className="clear-checkout">
                            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
