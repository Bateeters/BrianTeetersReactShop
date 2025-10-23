import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.shopNav}>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="/shop">Shop</Link>
                <Link className={styles.navLink} to="/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar