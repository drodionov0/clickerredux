import { useState } from 'react';
import styles from '../styles/clicker.module.css'

const Clicker = () => {
    const [count, setCount] = useState<number>(0)

    const handeMin = () => {setCount(count - 1)}
    const handePlus = () => {setCount(count + 1)}

    return(
        <div className={styles}>
            <div className={styles.bord}>
                <div className={styles.count}>
                    <h1>Count</h1>
                    <h2>{count}</h2>
                    <button onClick={handePlus}>+</button>
                    <button onClick={handeMin}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Clicker;