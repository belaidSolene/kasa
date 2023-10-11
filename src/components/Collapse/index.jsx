import { useState } from 'react'
import propType from 'prop-types'

import { ReactComponent as Arrow } from '../../assets/arrow/arrowCollapse.svg'
import style from './collapse.module.css'

export default function Collapse({ title, txt }) {
	const [isCollapse, setIsCollapse] = useState(false)
	const [isHidden, setIsHidden] = useState(true)

	function capitalizeString(str) {
		return str[0].toUpperCase() + str.slice(1).toLowerCase()
	}

	function handleClick() {
		if (isCollapse) {
			setIsCollapse(false)

			setTimeout(() => {
				setIsHidden(true)
			}, 290)
		} else {
			setIsCollapse(true)
			setIsHidden(false)
		}
	}

	const content =
		typeof txt === 'string' ? (
			<p className={style.txt}>{txt}</p>
		) : (
			<ul>
				{txt.map((element) => {
					return (
						<li
							className={style.txt}
							key={element}
						>
							{element}
						</li>
					)
				})}
			</ul>
		)

	return (
		<div className={style.collapse}>
			<div className={style.topBar}>
				{capitalizeString(title)}
				<button onClick={handleClick}>
					<Arrow
						className={`${style.arrow} 
							${isCollapse ? style.rotate : style.arrow}`}
					/>
				</button>
			</div>

			<div
				className={`${style.content} 
					${
						isCollapse
							? `${style.fadeIn}`
							: `${style.fadeOut} 
								${style.notVisible} 
								${isHidden ? `${style.hidden}` : ''}`
					}
				`}
			>
				{content}
			</div>
		</div>
	)
}

Collapse.protoTypes = {
	title: propType.string.isRequired,
	txt: propType.oneOfType([propType.string, propType.array]).isRequired,
}
