import styles from '../../../styles/LoginRegister.module.css';

export default function Register({setShow}) {
    return(
        <div className={styles.box}>
            <h2 className={styles.heading}>Register</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Username</label>
                    <input type="text" className={styles.formInput} placeholder="Username"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email</label>
                    <input type="text" className={styles.formInput} placeholder="Email"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input type="text" className={styles.formInput} placeholder="Password"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Confirm Password</label>
                    <input type="text" className={styles.formInput} placeholder="Confirm Password"/>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.btn}>Register</button>
                </div>
            </form>
            <p>Already have an account? <span onClick={() => setShow('login')} className={styles.link}>Login</span></p>
        </div>
    );
}