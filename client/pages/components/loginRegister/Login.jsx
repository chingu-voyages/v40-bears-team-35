import { useState } from 'react';
import { useUserContext } from '../../context/UserWrapper';
import { useRouter } from 'next/router';
import axios from 'axios'
import styles from '../../../styles/LoginRegister.module.css';

export default function Login({setShow}) {
    const [form, setForm] = useState({username: "", password: ""})
    const [errForm, setErrForm] = useState(false)
    const {setUser} = useUserContext()
    const router = useRouter()

    const submitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/login", form)
        .then(resp => {
            setUser(resp.data)
            router.push('/')
        })
        .catch(err => {
            setErrForm(true)
        })
    }
    return(
        <div className={styles.box}>
            <h2 className={styles.heading}>Login</h2>
            <form className={styles.form} onSubmit={submitForm}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Username</label>
                    <input type="text" className={styles.formInput} placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} required/>
                    {errForm && <p className={styles.error}>Invalid Username/Password</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input type="password" className={styles.formInput} placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} required/>
                    {errForm && <p className={styles.error}>Invalid Username/Password</p>}
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.btn} type="submit">Login</button>
                </div>
            </form>
            <p>Don't have an account? <span onClick={() => setShow('register')} className={styles.link}>Sign up</span></p>
        </div>
    );
}