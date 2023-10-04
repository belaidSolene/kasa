import { useState } from 'react'
import propType from 'prop-types'

import { ReactComponent as ArrowPrev } from '../../assets/arrow/arrowCarouselPrev.svg'
import { ReactComponent as ArrowNext } from '../../assets/arrow/arrowCarouselNext.svg'
import style from './carousel.module.css'

export default function Carousel({ pictures }) {
	const [index, setIndex] = useState(0)
	const numberPic = pictures.length
	let currentPic = pictures[index]

	return (
		<div className={style.carousel}>
			<img className={style.img} src={currentPic} alt='' />

			<button
				className={style.arrowPrev}
				onClick={() => {
					index === 0
						? setIndex(numberPic - 1)
						: setIndex(index - 1)
				}}
			>
				<ArrowPrev />
			</button>

			<button
				className={style.arrowNext}
				onClick={() => {
					index === numberPic - 1
						? setIndex(0)
						: setIndex(index + 1)
				}}
			>
				<ArrowNext />
			</button>

			<p className={style.index}>
				<span>
					{index + 1} / {numberPic}
				</span>
			</p>
		</div>
	)
}

Carousel.protoType = {
	pictures: propType.array.isRequired,
}
