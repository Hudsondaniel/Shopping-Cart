

export default function ProductCard({image, title, description, price}){

    return(
    <div className="product-card">
        <div className="product-image">
            <img src={props.image} alt="product" />
        </div>
        <div className="product-info">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button>Add to Cart</button>
        </div>  
    </div>
    )
}