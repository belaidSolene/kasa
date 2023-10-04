import { useParams } from 'react-router-dom'

import { rentals } from '../../datas/rentals'

import Error from '../Error'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import RatingStars from '../../components/RatingStars'
import Collapse from '../../components/Collapse'
import style from './rental.module.css'

export default function Rental() {
	const { idRental } = useParams()
	const rental = rentals.find((rental) => rental.id === idRental)

	if (!rental) {
		return <Error />
	} else {
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

		return (
			<section className={style.rental}>
				<div className={style.pictures}>
					{pictures.length > 1 ? (
						<Carousel pictures={pictures} />
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
					<div className={style.wrapperCollapse}>
						<Collapse
							title='description'
							txt={description}
						/>
					</div>

					<div className={style.wrapperCollapse}>
						<Collapse
							title='équipements'
							txt={equipments}
						/>
					</div>
				</div>
			</section>
		)
	}
}
