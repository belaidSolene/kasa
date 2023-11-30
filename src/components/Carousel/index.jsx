/**
 * The Carousel component represents an image carousel with navigation arrows
 * and an index indicator. It receives an array of 'pictures' as a prop and
 * allows users to navigate through the images. PropTypes are used for type validation.
 */

import { useState } from 'react'
import propType from 'prop-types'

// Importing arrow icons as React components
import { ReactComponent as ArrowPrev } from '../../assets/arrow/arrowCarouselPrev.svg'
import { ReactComponent as ArrowNext } from '../../assets/arrow/arrowCarouselNext.svg'

// Importing the stylesheet for styling
import style from './carousel.module.scss'

/**
 * @param {Object} props - The properties passed to the Carousel component.
 * @param {string[]} props.pictures - An array of URLs representing images in the carousel.
 */
export default function Carousel({ pictures }) {
	// State variable for managing the index of the currently displayed image
	const [index, setIndex] = useState(0)

	// Number of pictures in the carousel
	const numberPic = pictures.length

	// Current picture URL based on the current index
	let currentPic = pictures[index]

	// JSX structure defining the Carousel component layout
	return (
		<div className={style.carousel}>
			{/* Displaying the current image */}
			<img className={style.img} src={currentPic} alt='' />

			{/* Button to navigate to the previous image */}
			<button
				className={style.arrowPrev}
				onClick={() => {
					// Updating index based on current position
					index === 0
						? setIndex(numberPic - 1)
						: setIndex(index - 1)
				}}
				data-testid='prevBtn'
			>
				<ArrowPrev />
			</button>

			{/* Button to navigate to the next image */}
			<button
				className={style.arrowNext}
				onClick={() => {
					// Updating index based on current position
					index === numberPic - 1
						? setIndex(0)
						: setIndex(index + 1)
				}}
				data-testid='nextBtn'
			>
				<ArrowNext />
			</button>

			{/* Index indicator displaying the current position */}
			<p className={style.index}>
				<span>
					{index + 1} / {numberPic}
				</span>
			</p>
		</div>
	)
}

// PropTypes for type validation of component props
Carousel.protoType = {
	pictures: propType.array.isRequired,
}
