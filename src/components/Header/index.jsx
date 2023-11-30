/**
 * The Header component represents the header section of the application.
 * It includes the application logo, navigation links using React Router DOM's
 * Link and NavLink component.
 */

import { Link, NavLink } from 'react-router-dom'

// Importing the application logo
import logo from '../../assets/logo/logo-header.svg'

// Importing the stylesheet for styling
import style from './header.module.scss'

export default function Header() {
	// JSX structure defining the Header component layout
	return (
		<div className={style.wrapperHeader}>
			<header className={style.header} data-testid='header'>
				<Link to={'/'}>
					<img src={logo} alt='kasa' />
				</Link>
				<nav>
					<NavLink to='/'>
						{({ isActive }) => (
							<span
								className={
									isActive
										? style.active
										: undefined
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
										? style.active
										: undefined
								}
							>
								A Propos
							</span>
						)}
					</NavLink>
				</nav>
			</header>
		</div>
	)
}
