import { NavLink } from 'react-router-dom'

import logo from '../../assets/logos/logo-header.svg'
import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt='kasa' />
			<nav>
				<NavLink to='/'>
					{({ isActive }) => (
						<span
							className={
								isActive
									? styles.active
									: ''
							}
						>
							Accueil
						</span>
					)}
				</NavLink>

				<NavLink to='about'>
					{({ isActive }) => (
						<span
							className={
								isActive
									? styles.active
									: ''
							}
						>
							A Propos
						</span>
					)}
				</NavLink>
			</nav>
		</header>
	)
}
