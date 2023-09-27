import { aboutDatas } from '../../datas/about'
import bannerAbout from '../../assets/banners/bannerAbout.png'

import Banner from '../../components/Banner'

function About() {
	return (
		<section>
			<Banner img={bannerAbout} />

			{aboutDatas.map((data, i) => {
				return (
					<div key={`${data.title}-${i}`}>
						{data.title},<p>{data.description}</p>
					</div>
				)
			})}
		</section>
	)
}

export default About
