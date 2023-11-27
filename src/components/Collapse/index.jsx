/**
 * The Collapse component represents a collapsible section with a title and content.
 * It allows users to toggle the visibility of the content by clicking on on the arrow icon.
 * The component receives 'title' and 'txt' (text or array of elements) as props,
 * and PropTypes are used for type validation.
 */

import { useState } from 'react'
import propType from 'prop-types'

// Importing the arrow icon as a React component
import { ReactComponent as Arrow } from '../../assets/arrow/arrowCollapse.svg'

// Importing the stylesheet for styling
import style from './collapse.module.css'

// Importing utility function to capitalize a string
export function capitalizeString(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * @param {Object} props - The properties passed to the Collapse component.
 * @param {string} props.title - The title of the collapsible section.
 * @param {string|array} props.txt - The content of the collapsible section, either a string or an array of elements.
 */
export default function Collapse({ title, txt }) {
	// State variables for managing collapse and visibility
	const [isCollapse, setIsCollapse] = useState(false)
	const [isHidden, setIsHidden] = useState(true)

	// Function to handle the click event and toggle collapse and visibility
	function handleClick() {
		if (isCollapse) {
			setIsCollapse(false)

			// Delayed hiding of the content to allow animation
			setTimeout(() => {
				setIsHidden(true)
			}, 290)
		} else {
			setIsCollapse(true)
			setIsHidden(false)
		}
	}

	// JSX structure defining the Collapse component layout
	const content =
		typeof txt === 'string' ? (
			<p className={style.txt}>{txt}</p>
		) : (
			<ul data-testid='content-list'>
				{txt.map((element) => {
					return (
						<li
							className={style.txt}
							key={element}
						>
							{element}
						</li>
					)
				})}
			</ul>
		)

	// JSX structure defining the Banner component layout
	return (
		<div className={style.collapse}>
			<div className={style.topBar}>
				{capitalizeString(title)}
				<button onClick={handleClick}>
					<Arrow
						className={`${style.arrow} 
							${isCollapse ? style.rotate : style.arrow}`}
					/>
				</button>
			</div>

			<div
				data-testid='content-collapse'
				className={`${style.content} 
					${
						isCollapse
							? `${style.fadeIn}`
							: `${style.fadeOut} 
								${style.notVisible} 
								${isHidden ? `${style.hidden}` : ''}`
					}
				`}
			>
				{content}
			</div>
		</div>
	)
}

// PropTypes for type validation of component props
Collapse.protoTypes = {
	title: propType.string.isRequired,
	txt: propType.oneOfType([propType.string, propType.array]).isRequired,
}
