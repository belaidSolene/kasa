import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<nav>
			<NavLink to="/">
				{({ isActive, isPending }) => (
					<span className={isActive ? "active" : ""}>Accueil</span>
				)}
			</NavLink>
			
			<NavLink to="about">
				{({ isActive, isPending }) => (
					<span className={isActive ? "active" : ""}>A propos</span>
				)}
			</NavLink>
		</nav>
	)
}
