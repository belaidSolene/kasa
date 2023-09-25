import { NavLink } from 'react-router-dom'

import logo from '../../assets/logos/logo-header.svg'

export default function Header() {
	return (
		<header>
			<img src={logo} alt='kasa' />
			<nav>
				<NavLink to='/'>
					{({ isActive, isPending }) => (
						<span
							className={
								isActive ? 'active' : ''
							}
						>
							Accueil
						</span>
					)}
				</NavLink>

				<NavLink to='about'>
					{({ isActive, isPending }) => (
						<span
							className={
								isActive ? 'active' : ''
							}
						>
							A propos
						</span>
					)}
				</NavLink>
			</nav>
		</header>
	)
}
