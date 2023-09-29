import { aboutDatas } from '../../datas/about'
import bannerAbout from '../../assets/banners/bannerAbout.png'

import Banner from '../../components/Banner'
import Shutter from '../../components/Shutter'
import style from './about.module.css'

function About() {
	return (
		<section>
			<Banner img={bannerAbout} />

			{aboutDatas.map(({ title, description }, i) => {
				return (
					<div className={style.wrapperShutter}>
						<Shutter
							btn={title}
							txt={description}
						/>
					</div>
				)
			})}
		</section>
	)
}

export default About
