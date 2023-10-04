import PropTypes from 'prop-types'

import style from './banner.module.css'

export default function Banner({ img, title }) {
	return (
		<div className={style.banner}>
			<img src={img} alt='' />
			<div className={style.filterImg}></div>
			{title && <h1 className={style.title}>{title}</h1>}
		</div>
	)
}

Banner.protoTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string,
}
