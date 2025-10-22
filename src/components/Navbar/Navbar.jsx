import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar