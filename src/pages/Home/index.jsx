//import { Rentals } from '../../datas/rentals-link'
import { rentals } from '../../datas/rentals'
import bannerHome from '../../assets/banner/bannerHome.png'

import Banner from '../../components/Banner'
import Card from '../../components/Card'
import style from './home.module.css'

export default function Home() {
	const title = 'Chez vous, partout et ailleurs'

	return (
		<section>
			<Banner img={bannerHome} title={title} />

			<div className={style.rentalsBG}>
				<div className={style.rentals}>
					{rentals.map(({ id, title, pictures }) => {
						return (
							<Card
								id={id}
								title={title}
								picture={pictures[0]}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
