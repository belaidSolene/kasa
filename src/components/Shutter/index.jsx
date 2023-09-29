import { useState } from 'react'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import style from './shutter.module.css'

export default function Shutter({ btn, txt }) {
	const [isOpen, setIsOpen] = useState(false)
	const [isHidden, setIsHidden] = useState(true)

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

	return (
		<div>
			<button onClick={handleClick}>
				{btn}{' '}
				<Arrow
					className={
						isOpen
							? `${style.arrow} ${style.rotate}`
							: style.arrow
					}
				/>
			</button>
			<p
				className={`${style.text} 
					${
						isOpen
							? `${style.fadeIn}`
							: `${style.fadeOut} ${
									isHidden
										? `${style.hidden}`
										: ''
							  }`
					}
				`}
			>
				{txt}
			</p>
		</div>
	)
}
