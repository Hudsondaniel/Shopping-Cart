import '../CSS/carousel.css'
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
    return (
      <div className="carousel">
        <div className="carousel-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  };

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
} 

export default Carousel;