import { aboutDatas } from '../../datas/about'
import bannerAbout from '../../assets/banners/bannerAbout.png'

import Banner from '../../components/Banner'
import Shutter from '../../components/Shutter'

function About() {
	return (
		<section>
			<Banner img={bannerAbout} />

			{aboutDatas.map(({ title, description }, i) => {
				return <Shutter btn={title} txt={description} />
			})}
		</section>
	)
}

export default About
