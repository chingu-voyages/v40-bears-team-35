import {useUserContext} from '../context/UserWrapper';
import axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import { useRouter } from 'next/router';

export default function Nav() {
	const {user, setUser} = useUserContext()
	const router = useRouter()

	const logout = () => {
		axios.get("http://localhost:8000/api/user/logout", {"withCredentials": true})
		setUser({_id: "", username: ""})
		router.push('/')
	}
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<h1 className={styles.link}>Cinder 🔥</h1>
			</Link>
			<div>
				<Link href='/components/CreateRecipe'>
					<b className={`${styles.link} ${styles.linkBtn}`}>Create a Recipe</b>
				</Link>
				{user._id !== ""?
				<span onClick={logout}>
					<b className={`${styles.link} ${styles.linkBtn}`}>Logout</b>
				</span>:
				<Link  href='/components/loginRegister/LoginRegister'>
					<b className={`${styles.link} ${styles.linkBtn}`}>Login/SignUp</b>
				</Link>
				}
			</div>
		</nav>
	);
}
