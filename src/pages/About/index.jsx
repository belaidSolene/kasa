import { aboutDatas } from '../../datas/about'
import bannerAbout from '../../assets/banner/bannerAbout.png'

import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import style from './about.module.css'

function About() {
	return (
		<section>
			<Banner img={bannerAbout} />

			{aboutDatas.map(({ title, description }, i) => {
				return (
					<div className={style.wrapperCollapse}>
						<Collapse
							title={title}
							txt={description}
						/>
					</div>
				)
			})}
		</section>
	)
}

export default About
