import { useState } from 'react'
import propType from 'prop-types'

import { ReactComponent as Arrow } from '../../assets/arrow/arrowCollapse.svg'
import style from './collapse.module.css'

export default function Collapse({ title, txt }) {
	const [isOpen, setIsOpen] = useState(false)
	const [isHidden, setIsHidden] = useState(true)

	function capitalizeString(str) {
		return str[0].toUpperCase() + str.slice(1).toLowerCase()
	}

	function handleClick() {
		if (isOpen) {
			setIsOpen(false)

			setTimeout(() => {
				setIsHidden(true)
			}, 330)
		} else {
			setIsOpen(true)
			setIsHidden(false)
		}
	}

	const content =
		typeof txt === 'string' ? (
			<p>{txt}</p>
		) : (
			<ul>
				{txt.map((element) => {
					return (
						<li
							className={style.li}
							key={element}
						>
							{element}
						</li>
					)
				})}
			</ul>
		)

	return (
		<div className={style.Collapse}>
			<div className={style.topBar}>
				{capitalizeString(title)}
				<button onClick={handleClick}>
					<Arrow
						className={`${style.arrow} 
							${isOpen ? style.rotate : style.arrow}`}
					/>
				</button>
			</div>

			<div
				className={`${style.content} 
					${
						isOpen
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
