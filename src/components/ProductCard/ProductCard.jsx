import { useContext, useEffect, useReducer } from "react";
import Counter from "./Counter"
import styles from "./ProductCard.module.css"
import { CartContext } from "../../context/CartContext";

function counterReducer(state, action) {
    switch (action.type) {
        case "increment": return {count: state.count +1};
        case "decrement": return {count: state.count -1};
        case "SET_COUNT": return {...state, count: action.payload};
        default: return state;
    }
}

function ProductCard(props) {
    const [counterState, counterDispatch] = useReducer(counterReducer, {count:0});

    const {state: cartState, dispatch: cartDispatch} = useContext(CartContext);

    // console.log the cart
    useEffect(() => {
        console.log(cartState.cart);
    }, [cartState])

    const addToCart = () => {
        cartDispatch({
            type:"ADD_ITEM",
            payload: {...props.item, quantity: counterState.count || 1},
        });

        counterDispatch({ type: "SET_COUNT", payload: 0});
    };

    return (
        <div className={styles.gridSpace}>
            <div key={props.item.id} className={styles.productCard}>
                <div className={styles.productImgContainer}>
                    <img src={props.item.image} alt={props.item.title} className={styles.productImg}/>
                </div>
                <h3 className={styles.productTitle}>{props.item.title}</h3>
                <div className={styles.priceQuantContainer}>
                    <p className={styles.productPrice}>${props.item.price}</p>
                    <Counter count={counterState.count} dispatch={counterDispatch}/>
                </div>
                <button className={styles.addCartBtn} onClick={addToCart}>Add to Cart</button>
                <div className={styles.reviewsContainer}>
                    <p>{props.item.rating.rate} / 5</p>
                    <p>{props.item.rating.count} reviews</p>
                </div>
            </div>
        </div>
    )
};

export default ProductCard



