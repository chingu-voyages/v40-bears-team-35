import styles from '../../styles/Home.module.css';

export default function HomeScreen() {
    return(
        <div className={styles.container}>
            <div className={`${styles.arrow} ${styles.left} ${styles.singleArrow}`}></div>
            <div className={styles.outerCircle}>
                <div className={styles.innerCircle}>
                    <h1 className={styles.content}>Recipe</h1>
                </div>
            </div>
            <div className={`${styles.arrow} ${styles.right} ${styles.singleArrow}`}></div>
            <div className={styles.arrowGroup}>
                <div className={`${styles.arrow} ${styles.left}`}></div>
                <div className={`${styles.arrow} ${styles.right}`}></div>
            </div>
        </div>
    );
}