/**
 * The ErrorPage component is responsible for rendering a 404 error page when a user navigates to a non-existing route.
 * It displays a message indicating that the requested page does not exist and
 * provides a link to return to the home page using the React Router DOM's Link component.
 */

import { Link } from 'react-router-dom'

// Importing the stylesheet for styling
import style from './error.module.scss'

export default function ErrorPage() {
	// JSX structure defining the ErrorPage component layout
	return (
		<section className={style.errorDiv}>
			<h1 className={style.title}>404</h1>
			<h2 className={style.subtitle}>
				Oups ! La page que vous demandez n'existe pas.
			</h2>
			<p className={style.link}>
				<Link to={'/'} reloadDocument>
					Retourner sur la page d'accueil
				</Link>
			</p>
		</section>
	)
}
