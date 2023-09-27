import { ReactComponent as Logo } from '../../assets/logos/logo-footer.svg'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Logo />
			<p className={styles.copyright}>
				© 2023 Kasa. All rights reserved
			</p>
		</footer>
	)
}
