import { useState } from 'react'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import style from './shutter.module.css'

export default function Shutter({ btn, txt }) {
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
		typeof txt === 'object' ? (
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
		) : (
			<p>{txt}</p>
		)

	return (
		<div className={style.shutter}>
			<div className={style.topBar}>
				{capitalizeString(btn)}
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
