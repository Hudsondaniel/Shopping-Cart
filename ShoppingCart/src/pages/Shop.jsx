import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import '../CSS/shop.css';


export default function Shop(){
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchData();
    }, [])
    
    
    return (
        <>
            <Navbar />
            <div className="products-outside-container">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id} 
                        product={product} 
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                        />
                ))}
            </div>
        </>
    )
}