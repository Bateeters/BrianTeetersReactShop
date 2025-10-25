import { useEffect, useState } from "react";
import { getFakeStoreApiFunction } from "../../services/fakestoreapi";

function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productResults = await getFakeStoreApiFunction()
                setProducts(productResults)
            } catch (err) {
                console.log(err);
                setError("Oops! Looks like something went wrong. Let us check the back...")
            } finally {
                setLoading(false)
            }
        }

        loadProducts()
    }, [])

    return (
        <>
            <h1>Shop Page</h1>
            {error && <h3 style={{color: 'red'}}>{error}</h3>}
            {loading ? ( 
                <h3>Loading Products...</h3> 
            ) : (
                <>
                    {products.map((item) => (
                        <div key={item.id}
                        style={{
                            backgroundColor: "whitesmoke",
                            border: "1px solid gray",
                            borderRadius: "7px",
                            margin: "55px",
                            padding: "15px",
                            width: "500px",
                            color: "black"
                        }}>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <p>{item.description}</p>
                            <h6>{item.rating.rate} / 5 - {item.rating.count} reviews</h6>
                        </div>
                    ))}
                </>
            )
            }


        </>
    )
};

export default Shop;