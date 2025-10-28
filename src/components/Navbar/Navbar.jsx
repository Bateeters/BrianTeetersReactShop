import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function Navbar() {
    const {state, dispatch} = useContext(CartContext);
    
    const totalItems = state?.cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

    return (
        <nav className={styles.navContainer}>
            <div className={styles.shopNav}>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="/shop">Shop</Link>
                {totalItems > 0 ? 
                    ( 
                        <Link className={styles.navLink} style={{justifyContent: "end"}} to="/cart">
                        <p>Cart</p>
                        <div className={styles.cartNumber}>{totalItems}</div>
                        </Link>
                    ) : (
                        <Link className={styles.navLink} to="/cart">
                        <p>Cart</p>
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar