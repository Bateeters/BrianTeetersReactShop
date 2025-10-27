import styles from './ProductCard.module.css'

function Counter({count, dispatch}) {

    return(
        <div className={styles.counterContainer}>
            <button className={styles.counterBtn} onClick={() => dispatch({type: "increment"})}>+</button>
            <input 
                type="number"
                value={count} 
                onChange={(e) => dispatch({type: "SET_COUNT", payload: Number(e.target.value)})}
                className={styles.numInput}
            />
            <button className={styles.counterBtn} onClick={() => dispatch({type: "decrement"})} disabled={count===0}>-</button>
        </div>
    )
}

export default Counter;