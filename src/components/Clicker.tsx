import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/clicker.module.css'
import { increment, decrement } from '../action/CounterAction';

const Clicker = () => {
    const dispatch = useDispatch()
    const count:any = useSelector((state) => state);

    return(
        <div className={styles}>
            <div className={styles.bord}>
                <div className={styles.count}>
                    <div className={styles.center}>
                        <h2>{count}</h2>
                    </div>
                    <div className={styles.center}>
                        <button onClick={() => dispatch(increment())} className={styles.buttonstyle}>+</button>
                        <button onClick={() => dispatch(decrement())} className={styles.buttonstyle}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clicker;