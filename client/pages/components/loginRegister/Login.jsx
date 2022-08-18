import styles from '../../../styles/LoginRegister.module.css';

export default function Login({setShow}) {
    return(
        <div className={styles.box}>
            <h2 className={styles.heading}>Login</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Username</label>
                    <input type="text" className={styles.formInput} placeholder="Username"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input type="text" className={styles.formInput} placeholder="Password"/>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.btn}>Login</button>
                </div>
            </form>
            <p>Don't have an account? <span onClick={() => setShow('register')} className={styles.link}>Sign up</span></p>
        </div>
    );
}