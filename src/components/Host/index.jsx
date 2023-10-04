import propType from 'prop-types'

import style from './host.module.css'

export default function Host({ name, picture }) {
	const names = name.split(' ')

	return (
		<div className={style.host}>
			<p className={style.name}>
				<span>{names[0]}</span>
				<span>{names[1]}</span>
			</p>

			<img className={style.hostPP} src={picture} alt={name} />
		</div>
	)
}

Host.prototype = {
	name: propType.string.isRequired,
	picture: propType.string.isRequired,
}
