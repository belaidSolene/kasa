/**
 * The RatingStars component represents a visual representation of a numeric rating.
 * It receives a 'rating' as a prop and displays stars accordingly. The rating is
 * limited to a range of 0 to 5. PropTypes are used for type validation.
 */

import propType from 'prop-types'

// Importing star icons as React components
import { ReactComponent as Star } from '../../assets/star/star.svg'
import { ReactComponent as StarActive } from '../../assets/star/star-active.svg'

// Importing the stylesheet for styling
import style from './ratingStars.module.scss'

/**
 * @param {Object} props - The properties passed to the RatingStars component.
 * @param {number} props.rating - The numeric rating to be represented visually.
 */
export default function RatingStars({ rating }) {
	// Calculating positive and limited rating within the range of 0 to 5
	const positiveRating = Math.max(0, rating)
	const limitedRating = Math.min(5, positiveRating)

	// Generating an array of star components based on the limited rating
	const stars = []
	for (let i = 1; i <= 5; i++) {
		// Using StarActive or Star component based on the rating value
		if (i <= limitedRating) {
			stars.push(<StarActive className={style.star} key={i} />)
		} else {
			stars.push(<Star className={style.star} key={i} />)
		}
	}

	// JSX structure defining the RatingStars component layout
	return (
		<ul className={style.rating} data-testid='rating-stars'>
			{stars.map((star, index) => (
				<li key={index}>{star}</li>
			))}
		</ul>
	)
}

// PropTypes for type validation of component props
RatingStars.protoType = {
	rating: propType.array.isRequired,
}
