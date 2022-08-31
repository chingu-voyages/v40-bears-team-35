import styles from '../../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<h1 className={styles.link}>Cinder 🔥</h1>
			</Link>
			<div>
				<Link href='/components/CreateRecipe'>
					<b className={`${styles.link} ${styles.linkBtn}`}>Create a Recipe</b>
				</Link>
				<Link  href='/components/loginRegister/LoginRegister'>
					<b className={`${styles.link} ${styles.linkBtn}`}>Login/SignUp</b>
				</Link>
			</div>
		</nav>
	);
}
