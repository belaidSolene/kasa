import { ReactComponent as Logo } from '../../assets/logo/logo-footer.svg'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer} data-testid='footer'>
			<Logo className={styles.logo} data-testid='logo-footer' />
			<p className={styles.copyright}>
				© 2023 Kasa. All rights reserved
			</p>
		</footer>
	)
}
