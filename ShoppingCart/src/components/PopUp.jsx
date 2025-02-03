import PropTypes from "prop-types";
import '../CSS/PopUp.css'

export default function PopUp({image, title, description, price, rating }){
    return(
        <div className="popup-container">
            <div className="popup-image-container">
                <img src={image} alt={title} className="popup-images" />
            </div>
            <div className="popup-details-container">
                <h3 className="popup-title">{title}</h3>
                <p className="popup-description">{description}</p>
                <p className="popup-price">${price}</p>
                <p className="popup-rating">⭐ {rating.rate} ({rating.count} reviews)</p>
            </div>
        </div>
    )
}

PopUp.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
    }).isRequired,
};
