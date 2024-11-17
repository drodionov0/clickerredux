import styles from '../styles/clicker.module.css'
let count:number = 0;

const Clicker = () => {
    return(
        <div className={styles}>
            <div className={styles.bord}>
                <div className={styles.count}>
                    <p>Count</p>
                    <p>{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Clicker;