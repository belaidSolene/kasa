/**
 * The Home component represents the main landing page of the application,
 * showcasing a banner and a list of rental cards. It dynamically generates
 * a banner with a specified title and displays a collection of rental cards
 * retrieved from the 'rentals' data.
 */

// Importing necessary data and assets
import { rentals } from '../../datas/rentals'
import bannerHome from '../../assets/banner/bannerHome.png'

// Importing reusable components
import Banner from '../../components/Banner'
import Card from '../../components/Card'

// Importing the stylesheet for styling
import style from './home.module.scss'

export default function Home() {
	const bannerTitle = 'Chez vous, partout et ailleurs'

	// JSX structure defining the Home component layout
	return (
		<section>
			<Banner img={bannerHome} title={bannerTitle} />

			<div className={style.rentalsBG}>
				<div className={style.rentals}>
					{rentals.map(({ id, title, cover }) => {
						return (
							<Card
								key={id}
								id={id}
								title={title}
								cover={cover}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
