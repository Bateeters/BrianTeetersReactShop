function ProductCard(props) {
    return (
        <div key={props.item.id}
            style={{
                backgroundColor: "whitesmoke",
                border: "1px solid gray",
                borderRadius: "7px",
                margin: "55px",
                padding: "15px",
                width: "500px",
                color: "black"
            }}>
                <img src={props.item.image} alt={props.item.title} />
                <h2>{props.item.title}</h2>
                <p>${props.item.price}</p>
                <div>
                    <p>Quantity:</p>
                    <button>+</button>
                    <input type="number" />
                    <button>-</button>
                </div>
                <button>Add to Cart</button>
                <p>{props.item.description}</p>
                <h6>{props.item.rating.rate} / 5 - {props.item.rating.count} reviews</h6>
            </div>
    )
};

export default ProductCard



