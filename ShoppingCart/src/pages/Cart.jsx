import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import useCartStore from "../Store/useCartStore";

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
                        <button onClick={clearCart}>Clear Cart</button>
                    </div>
                )}
            </div>
        </div>
    );
}
