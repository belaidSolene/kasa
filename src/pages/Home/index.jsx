//import { Rentals } from '../../datas/rentals-link'
import bannerHome from '../../assets/banners/bannerHome.png'
import Banner from '../../components/Banner'

export default function Home() {
	const titleHome = 'Chez vous, partout et ailleurs'

	return (
		<section>
			<Banner img={bannerHome} title={titleHome} />
		</section>
	)
}
