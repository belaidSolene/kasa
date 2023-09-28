//import { Rentals } from '../../datas/rentals-link'
import { rentals } from '../../datas/rentals'
import bannerHome from '../../assets/banners/bannerHome.png'

import Banner from '../../components/Banner'
import Card from '../../components/Card'

export default function Home() {
	const titleHome = 'Chez vous, partout et ailleurs'

	return (
		<section>
			<Banner img={bannerHome} title={titleHome} />

			<div>
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
		</section>
	)
}
