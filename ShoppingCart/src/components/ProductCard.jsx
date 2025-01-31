import PropTypes from "prop-types";
import '../CSS/product-card.css';

export default function ProductCard({ image, title, description, price, rating }) {
    return (
            <div className="products-container">
                <div className="images-container">
                    <div className="product-image-container">
                        <img src={image} alt={title} className="product-images" />
                    </div>
                </div>
                <div className="product-details-container">
                    <h3 className="product-title">{title.slice(0,30)}..</h3>
                    <p className="product-description">{description.slice(0, 100)}...</p>
                    <p className="product-price">${price.toFixed(2)}</p>
                    <p className="product-rating">⭐ {rating.rate} ({rating.count} reviews)</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
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
