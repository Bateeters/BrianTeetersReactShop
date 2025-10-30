import styles from './ProductCard.module.css'

function Counter({ count, onIncrement, onDecrement }) {
    return (
        <div className={styles.counterContainer}>
            <button className={styles.counterBtn} onClick={onIncrement}>+</button>
            <input
                type="number"
                value={count}
                readOnly
                className={styles.numInput}
            />
            <button className={styles.counterBtn} onClick={onDecrement} disabled={count <= 1}>-</button>
        </div>
    );
}


export default Counter;
