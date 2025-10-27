import { useReducer } from "react";
import Counter from "./Counter"
import styles from "./ProductCard.module.css"

function counterReducer(state, action) {
    switch (action.type) {
        case "increment": return {count: state.count +1};
        case "decrement": return {count: state.count -1};
        case "SET_COUNT": return {...state, count: action.payload};
        default: return state;
    }
}

function ProductCard(props) {
    const [state, dispatch] = useReducer(counterReducer, {count:0});

    return (
        <div className={styles.gridSpace}>
            <div key={props.item.id} className={styles.productCard}>
                <div className={styles.productImgContainer}>
                    <img src={props.item.image} alt={props.item.title} className={styles.productImg}/>
                </div>
                <h3 className={styles.productTitle}>{props.item.title}</h3>
                <div className={styles.priceQuantContainer}>
                    <p className={styles.productPrice}>${props.item.price}</p>
                    <Counter count={state.count} dispatch={dispatch}/>
                </div>
                <button className={styles.addCartBtn} onClick={() => console.log(`Added ${state.count} ${props.item.title} to cart.`)}>Add to Cart</button>
                <div className={styles.reviewsContainer}>
                    <p>{props.item.rating.rate} / 5</p>
                    <p>{props.item.rating.count} reviews</p>
                </div>
            </div>
        </div>
    )
};

export default ProductCard



