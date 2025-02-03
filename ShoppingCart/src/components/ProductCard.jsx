import { useState } from "react";
import PropTypes from "prop-types";
import "../CSS/product-card.css";
import PopUp from "./PopUp";

export default function ProductCard({ image, title, description, price, rating }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div className="products-container">
                <div className="images-container">
                    <div className="product-image-container">
                        <img src={image} alt={title} className="product-images" />
                    </div>
                </div>
                <div className="product-details-container">
                    {/* Open popup when title is clicked */}
                    <h3 className="product-title" onClick={() => setIsPopupOpen(true)}>
                        {title.slice(0, 30)}..
                    </h3>
                    <p className="product-description">{description.slice(0, 100)}...</p>
                    <p className="product-price">${price.toFixed(2)}</p>
                    <p className="product-rating">⭐ {rating.rate} ({rating.count} reviews)</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>

            {/* Show popup if isPopupOpen is true */}
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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
    }).isRequired,
};
