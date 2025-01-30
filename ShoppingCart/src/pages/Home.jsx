import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import '../CSS/carousel.css';
import img1 from '../assets/home-images/1.jpg';
import img2 from '../assets/home-images/2.jpg';
import img3 from '../assets/home-images/3.jpg';
import img4 from '../assets/home-images/4.jpg';
import img5 from '../assets/home-images/5.jpg';
import img6 from '../assets/home-images/6.jpg';
import img7 from '../assets/home-images/7.jpg';
import img8 from '../assets/home-images/8.jpg';


export default function Home(){
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    
    return (
        <div>
            <Navbar />
            <div className="carousel-contain-home">
                <Carousel images={images} className="carousel-box" />
            </div>
        </div>
    )
}