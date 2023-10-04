import propType from 'prop-types'

import style from './host.module.css'

export default function Host({ name, picture }) {
	return (
		<div className={style.host}>
			{name}
			<img className={style.hostPP} src={picture} alt={name} />
		</div>
	)
}

Host.prototype = {
	name: propType.string.isRequired,
	picture: propType.string.isRequired,
}
