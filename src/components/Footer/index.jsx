/**
 * The Footer component represents the footer section of the application.
 * It includes the Kasa logo from the 'logo-footer.svg' file and a copyright notice.
 */

// Importing the Kasa logo as a React component
import { ReactComponent as Logo } from '../../assets/logo/logo-footer.svg'

// Importing the stylesheet for styling
import styles from './footer.module.css'

export default function Footer() {
	// JSX structure defining the Footer component layout
	return (
		<footer className={styles.footer} data-testid='footer'>
			<Logo className={styles.logo} data-testid='logo-footer' />
			<p className={styles.copyright}>
				© 2023 Kasa. All rights reserved
			</p>
		</footer>
	)
}
