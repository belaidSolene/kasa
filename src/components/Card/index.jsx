import { Link } from 'react-router-dom'
import propType from 'prop-types'

import style from './card.module.css'

export default function Card({ id, title, picture }) {
	return (
		<Link to={`rental/${id}`} reloadDocument>
			<article className={style.card}>
				<img
					className={style.picture}
					src={picture}
					alt={title}
				/>
				<div className={style.filterPicture}></div>
				<h2 className={style.title}>{title}</h2>
			</article>
		</Link>
	)
}

Card.protoTypes = {
	id: propType.string.isRequired,
	title: propType.string.isRequired,
	picture: propType.string.isRequired,
}
