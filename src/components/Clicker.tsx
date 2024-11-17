import styles from '../styles/clicker.module.css'
let count:number = 0;

const Clicker = () => {
    return(
        <div className={styles}>
            <div className={styles.bord}>
                <div className={styles.count}>
                    <h1>Count</h1>
                    <h2>{count}</h2>
                </div>
            </div>
        </div>
    )
}

export default Clicker;