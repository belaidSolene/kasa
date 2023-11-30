/**
 * The Tag component represents a list of tags associated with a rental property.
 * It receives an array of 'tags' as a prop and displays them in a styled list.
 * PropTypes are used for type validation.
 */

import propType from 'prop-types'

// Importing the stylesheet for styling
import style from './tag.module.scss'

/**
 * @param {Object} props - The properties passed to the Tag component.
 * @param {string[]} props.tags - An array of tags associated with the rental.
 */
export default function Tag({ tags }) {
	// JSX structure defining the Tag component layout
	return (
		<ul className={style.tags} data-testid='tags-list'>
			{tags.map((tag) => {
				return (
					<li key={tag} className={style.tag}>
						{tag}
					</li>
				)
			})}
		</ul>
	)
}

// PropTypes for type validation of component props
Tag.protoType = {
	tags: propType.array.isRequired,
}
