import propType from 'prop-types'

import style from './tag.module.css'

export default function Tag({ tags }) {
	return (
		<ul className={style.tags}>
			{tags.map((tag) => {
				return (
					<li key={tag} className={style.tag}>
						{tag}
					</li>
				)
			})}
		</ul>
	)
}

Tag.protoType = {
	tags: propType.array.isRequired,
}
