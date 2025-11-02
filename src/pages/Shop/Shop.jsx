import { useEffect, useState } from "react";
import { getFakeStoreApiFunction } from "../../services/fakestoreapi";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css"

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
            
            {error && <h3 style={{color: 'red'}}>{error}</h3>}
            {loading ? ( 
                <h3 style={{textAlign: "center", width: "100vw"}}>Loading Products...</h3> 
            ) : (
                <div>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "end", margin: "120px auto 50px", borderBottom: "1px solid black", width: "80%"}}>
                        <h2 style={{fontSize: "2rem", margin: "0"}}>Shop</h2>
                    </div>
                    <div className={styles.productDisplay}>
                        {products.map((item) => (
                            <ProductCard item={item}/>
                        ))}
                    </div>
                </div>
            )
            }


        </>
    )
};

export default Shop;