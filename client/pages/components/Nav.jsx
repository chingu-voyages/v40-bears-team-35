import styles from '../../styles/Nav.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<a href='/'>
				<h1>Cinder 🔥</h1>
			</a>
			<div>
				<a href='/components/loginRegister/LoginRegister'>
					<b>Login/SignUp</b>
				</a>
			</div>
		</nav>
	);
}
