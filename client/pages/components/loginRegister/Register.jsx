import { useState } from 'react';
import { useUserContext } from '../../context/UserWrapper';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../../styles/LoginRegister.module.css';

const defaultForm = {username: "", email: "", password: "", confirm: ""}
export default function Register({setShow}) {
    const [form, setForm] = useState(defaultForm)
    const [errForm, setErrForm] = useState(defaultForm)
    const {setUser} = useUserContext()
    const router = useRouter()

    const submitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", form, {"withCredentials": true})
        .then(resp => {
            setUser({_id: resp.data._id, username: resp.data.username})
            router.push('/')
        })
        .catch(err => {
            setErrForm({...errForm, ...err.response.data})
        })
    }

    return(
        <div className={styles.box}>
            <h2 className={styles.heading}>Register</h2>
            <form className={styles.form} onSubmit={submitForm}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Username</label>
                    <input type="text" className={styles.formInput} placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} required/>
                    {errForm.username !== "" && <p className={styles.error}>{errForm.username}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email</label>
                    <input type="email" className={styles.formInput} placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} required/>
                    {errForm.email !== "" && <p className={styles.error}>{errForm.email}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input type="password" className={styles.formInput} placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} required/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Confirm Password</label>
                    <input type="password" className={styles.formInput} placeholder="Confirm Password" onChange={(e) => setForm({...form, confirm: e.target.value})} required/>
                    {errForm.confirm !== "" && <p className={styles.error}>{errForm.confirm}</p>}
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.btn} type="submit">Register</button>
                </div>
            </form>
            <p>Already have an account? <span onClick={() => setShow('login')} className={styles.link}>Login</span></p>
        </div>
    );
}