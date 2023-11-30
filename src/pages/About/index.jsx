/**
 * The About component represents a section of the application dedicated to providing
 * information about the organization. It features a banner and utilizes the
 * Collapse component to dynamically display details fetched from the 'aboutDatas' data.
 */

// Importing necessary data and assets
import { aboutDatas } from '../../datas/about'
import bannerAbout from '../../assets/banner/bannerAbout.png'

// Importing reusable components
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

// Importing the stylesheet for styling
import style from './about.module.scss'

function About() {
	// JSX structure defining the About component layout
	return (
		<section className={style.aboutSection}>
			<Banner img={bannerAbout} />

			{aboutDatas.map(({ title, description }, i) => {
				return (
					<div
						className={style.wrapperCollapse}
						key={title}
					>
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
