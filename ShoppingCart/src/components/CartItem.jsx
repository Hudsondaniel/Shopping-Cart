import PropTypes from "prop-types";
import useCartStore from "../Store/useCartStore";
import '../CSS/cartitem.css';

export default function CartItem({ item }) {
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    const handleDecrease = () => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image} alt={item.title} className="cart-item-image" />
            </div>
            
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>

                <div className="cart-item-quantity">
                    <button 
                        className="quantity-button"
                        onClick={handleDecrease}
                        disabled={item.quantity <= 1}
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                        +
                    </button>
                </div>
            </div>

            <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>
                Remove
            </button>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};
