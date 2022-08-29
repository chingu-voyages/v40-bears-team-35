import styles from '../../styles/Nav.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<a href='/'>
				<h1>Cinder 🔥</h1>
			</a>
			<div>
				<a className={styles.link} href='/components/CreateRecipe'>
					<b>Create a Recipe</b>
				</a>
				<a className={styles.link} href='/components/loginRegister/LoginRegister'>
					<b>Login/SignUp</b>
				</a>
			</div>
		</nav>
	);
}
