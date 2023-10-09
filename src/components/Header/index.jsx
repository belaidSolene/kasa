import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/logo/logo-header.svg'
import style from './header.module.css'

export default function Header() {
	return (
		<header className={style.header}>
			<Link to={'/'}>
				<img src={logo} alt='kasa' />
			</Link>
			<nav>
				<NavLink to='/' className={style.navLink}>
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

				<NavLink to='about' className={style.navLink}>
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
	)
}
