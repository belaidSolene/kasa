import propType from 'prop-types'

import { ReactComponent as Star } from '../../assets/star/star.svg'
import { ReactComponent as StarActive } from '../../assets/star/star-active.svg'
import style from './ratingStars.module.css'

export default function RatingStars({ rating }) {
	const positiveRating = Math.max(0, rating)
	const limitedRating = Math.min(5, positiveRating)

	const stars = []
	for (let i = 1; i <= 5; i++) {
		if (i <= limitedRating) {
			stars.push(<StarActive className={style.star} key={i} />)
		} else {
			stars.push(<Star className={style.star} key={i} />)
		}
	}
	return (
		<ul className={style.rating} data-testid='rating-stars'>
			{stars.map((star, index) => (
				<li key={index}>{star}</li>
			))}
		</ul>
	)
}

RatingStars.protoType = {
	rating: propType.array.isRequired,
}
