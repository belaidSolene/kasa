/**
 * The Host component represents the host information, including the host's name
 * and profile picture. It receives 'name' and 'picture' as props, where 'name' is
 * split into first and last names for display. PropTypes are used for type validation.
 */

import propType from 'prop-types'

// Importing the stylesheet for styling
import style from './host.module.css'

/**
 * @param {Object} props - The properties passed to the Host component.
 * @param {string} props.name - The full name of the host.
 * @param {string} props.picture - The URL of the host's profile picture.
 */
export default function Host({ name, picture }) {
	// Splitting the full name into first and last names
	const names = name.split(' ')

	// JSX structure defining the Host component layout
	return (
		<div className={style.host} data-testid='host'>
			<p className={style.name}>
				<span>{names[0]}</span>
				<span> {names[1]}</span>
			</p>

			<img className={style.hostPP} src={picture} alt={name} />
		</div>
	)
}

// PropTypes for type validation of component props
Host.prototype = {
	name: propType.string.isRequired,
	picture: propType.string.isRequired,
}
