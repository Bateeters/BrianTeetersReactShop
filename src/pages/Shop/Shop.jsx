import { useEffect, useState } from "react";
import { getFakeStoreApiFunction } from "../../services/fakestoreapi";
import ProductCard from "../../components/ProductCard/ProductCard";

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
                        <ProductCard item={item}/>
                    ))}
                </>
            )
            }


        </>
    )
};

export default Shop;