/**
 * The Rental component represents a detailed view of a rental property.
 * It retrieves information about the rental using the 'idRental' parameter from the URL and displays its details.
 * If the provided ID does not exist, the component redirects to the error page.
 */

import { useParams, redirect } from 'react-router-dom'

// Importing utility function to get rental information
import { getRental } from '../../utils/getRental'

// Importing reusable components
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import RatingStars from '../../components/RatingStars'
import Collapse from '../../components/Collapse'

// Importing the stylesheet for styling
import style from './rental.module.scss'

export default function Rental() {
	// Retrieving the 'idRental' parameter from the URL
	const { idRental } = useParams()

	// Getting rental information based on the retrieved ID
	const rental = getRental(idRental)

	if (!rental) {
		return redirect('/*')
	} else {
		// Destructuring rental information for easier access
		const {
			title,
			pictures,
			description,
			host,
			rating,
			location,
			equipments,
			tags,
		} = rental

		// JSX structure defining the Rental component layout
		return (
			<section className={style.wrapperRental}>
				<div className={style.rental}>
					<div className={style.wrapperCarousel}>
						{pictures.length > 1 ? (
							<Carousel
								pictures={pictures}
							/>
						) : (
							<img
								className={style.cover}
								src={pictures[0]}
								alt=''
							/>
						)}
					</div>

					<div className={style.header}>
						<div className={style.leftSide}>
							<h1 className={style.title}>
								{title.toUpperCase()}
							</h1>
							<h2 className={style.location}>
								{location}
							</h2>

							<Tag tags={tags} />
						</div>

						<div className={style.rightSide}>
							<Host
								name={host.name}
								picture={host.picture}
							/>

							<RatingStars rating={rating} />
						</div>
					</div>

					<div className={style.details}>
						<div
							className={
								style.wrapperCollapse
							}
						>
							<Collapse
								title='description'
								txt={description}
							/>
						</div>

						<div
							className={
								style.wrapperCollapse
							}
						>
							<Collapse
								title='équipements'
								txt={equipments}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
