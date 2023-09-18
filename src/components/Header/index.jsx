import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<nav>
			<Link to={`/accueil`}>Accueil</Link>
			<Link to={`/about`}>A propos</Link>
		</nav>
	)
}
