/**
 * The Card component represents a clickable card displaying information about a rental.
 * It includes an image, a filter overlay, a title, and is wrapped in a React Router DOM Link
 * for navigation. The component receives 'id', 'title', and 'cover' as props, and PropTypes
 * are used for type validation.
 */

import { Link } from 'react-router-dom'
import propType from 'prop-types'

// Importing the stylesheet for styling
import style from './card.module.scss'

/**
 * @param {Object} props - The properties passed to the Card component.
 * @param {string} props.id - The unique identifier of the rental.
 * @param {string} props.title - The title of the rental.
 * @param {string} props.cover - The URL of the cover image for the rental.
 */
export default function Card({ id, title, cover }) {
	// JSX structure defining the Card component layout
	return (
		<Link to={`rental/${id}`} reloadDocument>
			<article className={style.card}>
				<img
					className={style.picture}
					src={cover}
					alt={title}
				/>
				<div className={style.filterPicture}></div>
				<h2 className={style.title}>{title}</h2>
			</article>
		</Link>
	)
}

// PropTypes for type validation of component props
Card.protoTypes = {
	id: propType.string.isRequired,
	title: propType.string.isRequired,
	picture: propType.string.isRequired,
}
