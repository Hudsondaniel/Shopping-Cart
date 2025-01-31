import PropTypes from 'prop-types';

export default function ProductCard({image, title, description, price}){

    return(
    <div className="product-card">
        <div className="product-image">
            <img src={image} alt="product" />
        </div>
        <div className="product-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>  
    </div>
    )
}

ProductCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}