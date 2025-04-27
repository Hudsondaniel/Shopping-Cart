import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import '../CSS/carousel.css';
import '../CSS/home.css';
import Footer from "../components/Footer";


export default function Home(){
    const images = [
        '/assets/home-images/1.jpg',
        '/assets/home-images/2.jpg',
        '/assets/home-images/3.jpg',
        '/assets/home-images/4.jpg',
        '/assets/home-images/5.jpg',
        '/assets/home-images/6.jpg',
        '/assets/home-images/7.jpg',
    ];
    
    return (
        <div>
            <Navbar />
            <div className="carousel-contain-home">
                <Carousel images={images} className="carousel-box" />
            </div>
            <div className="heading-home">
                <h1>Summer Sale Is Here!</h1>
            </div>
            <div className="summer-sale-container">
                <div className="sale-image">
                    <img src={'/assets/home-images/summer-sale.jpg'} alt="Summer Sale" loading="lazy" width="900" height="400" />
                </div>
            </div>
            <Footer />
        </div>
    )
}