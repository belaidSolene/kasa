import { Link } from 'react-router-dom'

import style from './error.module.css'

export default function ErrorPage() {
	return (
		<section className={style.errorDiv}>
			<h1 className={style.title}>404</h1>
			<h2 className={style.subtitle}>
				Oups ! La page que vous demandez n'existe pas.
			</h2>
			<p className={style.link}>
				<Link to={'/'}>
					Retourner sur la page d'accueil
				</Link>
			</p>
		</section>
	)
}
