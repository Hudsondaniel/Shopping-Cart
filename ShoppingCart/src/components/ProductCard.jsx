import { useState } from "react";
import PropTypes from "prop-types";
import "../CSS/product-card.css";
import PopUp from "./PopUp";
import useCartStore from "../Store/useCartStore";

export default function ProductCard({ id, image, title, description, price, rating }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart({
            id: id || Date.now(), // Ensures item has a unique ID
            image,
            title,
            description,
            price,
            rating,
            quantity: 1,
        });
    };

    return (
        <>
            <div className="products-container">
                <div className="images-container">
                    <div className="product-image-container">
                        <img src={image} alt={title} className="product-images" />
                    </div>
                </div>
                <div className="product-details-container">
                    <h3 className="product-title" onClick={() => setIsPopupOpen(true)}>
                        {title.slice(0, 30)}..
                    </h3>
                    <p className="product-description">{description.slice(0, 100)}...</p>
                    <p className="product-price">${price.toFixed(2)}</p>
                    <p className="product-rating">⭐ {rating.rate} ({rating.count} reviews)</p>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
                    <PopUp
                        image={image}
                        title={title}
                        description={description}
                        price={price}
                        rating={rating}
                        closePopup={() => setIsPopupOpen(false)}
                    />
                </div>
            )}
        </>
    );
}

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
    }).isRequired,
};
