import '../CSS/carousel.css'

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
  
  export default Carousel;