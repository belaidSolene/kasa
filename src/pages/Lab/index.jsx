import { rentals } from '../../datas/rentals'
import Carousel from '../../components/Carousel'
import RatingStars from '../../components/RatingStars'
import Shutter from '../../components/Shutter'
import style from './lab.module.css'

export default function Lab() {
	const {
		title,
		pictures,
		description,
		host,
		rating,
		location,
		equipments,
		tags,
	} = rentals[17]

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

					<ul className={style.tags}>
						{tags.map((tag) => {
							return (
								<li
									key={tag}
									className={
										style.tag
									}
								>
									{tag}
								</li>
							)
						})}
					</ul>

					<ul className={style.rating}></ul>
				</div>

				<div className={style.rightSide}>
					<div className={style.host}>
						{host.name}
						<img
							className={style.hostPP}
							src={host.picture}
							alt={host.name}
						/>
					</div>

					<RatingStars rating={rating} />
				</div>
			</div>

			<div className={style.details}>
				<div className={style.wrapperShutter}>
					<Shutter
						btn='description'
						txt={description}
					/>
				</div>

				<div className={style.wrapperShutter}>
					<Shutter
						btn='équipements'
						txt={equipments}
					/>
				</div>
			</div>
		</section>
	)
}
