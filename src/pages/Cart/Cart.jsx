import { useCart } from "../../context/CartContext";
import Counter from "../../components/ProductCard/Counter";

function Cart() {
    const { state, dispatch } = useCart();

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    function subTotal(price, quantity) {
        const subTotalPrice = price*quantity;
        return subTotalPrice.toFixed(2);
    }

    return (
        <>
            <h1>Cart</h1>
            <p>Total items: {totalItems}</p>
            <ul>
                {state.cart.map(item => (
                    <li key={item.id} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "10px 0" }}>
                        <img src={item.image} alt={item.title} style={{ maxHeight: "75px" }} />
                        <div>
                            <p>{item.title}</p>
                            <p>${item.price.toFixed(2)} x {item.quantity}</p>
                            <p>${subTotal(item.price, item.quantity)}</p>
                        </div>
                        <Counter
                            count={item.quantity}
                            onIncrement={() =>
                                dispatch({ type: "SET_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })
                            }
                            onDecrement={() =>
                                dispatch({ type: "SET_QUANTITY", payload: { id: item.id, quantity: Math.max(1, item.quantity - 1) } })
                            }
                        />
                        <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                            style={{ marginLeft: "10px" }}
                        >
                        Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </>
    );
}

export default Cart;
