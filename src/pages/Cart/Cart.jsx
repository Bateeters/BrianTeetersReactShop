import { useCart } from "../../context/CartContext";
import Counter from "../../components/ProductCard/Counter";
import styles from "./Cart.module.css";

function Cart() {
    const { state, dispatch } = useCart();

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const tax = totalPrice * .0752;
    const shipping = totalPrice * .25;
    const orderPrice = tax + shipping + totalPrice;

    function subTotal(price, quantity) {
        const subTotalPrice = price*quantity;
        return subTotalPrice.toFixed(2);
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "end", margin: "120px auto 50px", borderBottom: "1px solid black", width: "80%"}}>
                <h2 style={{fontSize: "2rem", margin: "0"}}>Cart</h2>
                <p style={{margin: "5px 0"}}>Total items: {totalItems}</p>
            </div>
            <ul style={{padding: "20px"}}>
                {state.cart.map(item => (
                    <div className={styles.cartCard}>
                        <li key={item.id} className={styles.cartItem}>
                            <img src={item.image} alt={item.title} className={styles.cartItemImg} />
                            <div className={styles.cartItemDetails}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div style={{width: "50%"}}>
                                        <Counter
                                            count={item.quantity}
                                            onIncrement={() =>
                                                dispatch({ type: "SET_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })
                                            }
                                            onDecrement={() =>
                                                dispatch({ type: "SET_QUANTITY", payload: { id: item.id, quantity: Math.max(1, item.quantity - 1) } })
                                            }
                                        />
                                    </div>
                                    <button
                                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                                        className={styles.removeBtn}
                                    >
                                    Remove
                                    </button>
                                </div>
                            </div>
                            <h3 className={styles.cartItemPrice}>${item.price.toFixed(2)}</h3>
                        </li>
                        {item.quantity === 1 ? (
                            <h3 className={styles.cartItemSubtotal}>Subtotal: ({item.quantity} item) ${subTotal(item.price, item.quantity)}</h3>
                        ):(
                            <h3 className={styles.cartItemSubtotal}>Subtotal: ({item.quantity} items) ${subTotal(item.price, item.quantity)}</h3>
                        )}
                    </div>
                ))}
            </ul>
            <div className={styles.cartPriceDisplay} style={{borderTop: "1px solid black", margin: "0 70px", textAlign: "end"}}>
                {totalItems === 1 ? (
                    <p>Cart Subtotal: ({totalItems} item) ${totalPrice.toFixed(2)}</p>
                ):(
                    <p>Cart Subtotal: ({totalItems} items) ${totalPrice.toFixed(2)}</p>
                )}
                <p>Tax: ${tax.toFixed(2)}</p>
                {totalPrice < 25 ? (
                    <p>Shipping (free for orders over $25.00): ${shipping.toFixed(2)}</p>
                ):(
                    <p>Shipping (free for orders over $25.00): $0.00</p>
                )}
                {totalItems === 1 ? (
                    <h2>Total Price: ({totalItems} item) ${orderPrice.toFixed(2)}</h2>
                ):(
                    <h2>Total Price: ({totalItems} items) ${orderPrice.toFixed(2)}</h2>
                )}
            </div>
        </div>
    );
}

export default Cart;
