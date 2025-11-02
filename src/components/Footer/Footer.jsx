
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div className={styles.footerBrand}>
                        <h2 className={styles.footerLogo}>Teeters Shop</h2>
                        <p style={{color: "white"}}>Your go-to store for everyday essentials and unique finds.</p>
                        <p style={{margin: "auto 0 0 0", color: "gray"}}>Teeters Shop. Copyright line would go here.</p>

                    </div>
                    <div>
                        <h3 className={styles.linkDisplay}>Shop</h3>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <Link className={styles.footerLinks} to="/">Home</Link>
                            <Link className={styles.footerLinks} to="/shop">Shop</Link>
                            <Link className={styles.footerLinks} to="/cart">Cart</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.linkDisplay}>Customer Service</h3>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <Link className={styles.footerLinks} to="/error">Help Center</Link>
                            <Link className={styles.footerLinks} to="/error">Shipping & Returns</Link>
                            <Link className={styles.footerLinks} to="/error">Track Order</Link>
                            <Link className={styles.footerLinks} to="/error">Gift Cards</Link>
                            <Link className={styles.footerLinks} to="/error">Contact Us</Link>
                        </div>
                    </div>

                    <div>
                    <h3 className={styles.linkDisplay}>Company</h3>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <Link className={styles.footerLinks} to="/error">About Us</Link>
                            <Link className={styles.footerLinks} to="/error">Careers</Link>
                            <Link className={styles.footerLinks} to="/error">Press</Link>
                            <Link className={styles.footerLinks} to="/error">Privacy Policy</Link>
                            <Link className={styles.footerLinks} to="/error">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer