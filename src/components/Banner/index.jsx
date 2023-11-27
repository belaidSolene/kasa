/**
 * The Banner component represents a banner section used for page headers.
 * It includes an image, a filter overlay, and an optional title. The image and
 * title are provided as props, and PropTypes are used for type validation.
 */

import PropTypes from 'prop-types'

// Importing the stylesheet for styling
import style from './banner.module.css'

/**
 * @param {Object} props - The properties passed to the Banner component.
 * @param {string} props.img - The URL of the image to be displayed in the banner.
 * @param {string} [props.title] - The optional title to be displayed over the image.
 */
export default function Banner({ img, title }) {
	// JSX structure defining the Banner component layout
	return (
		<div className={style.banner}>
			<img src={img} alt='' />
			<div className={style.filterImg}></div>
			{title && <h1 className={style.title}>{title}</h1>}
		</div>
	)
}

// PropTypes for type validation of component props
Banner.protoTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string,
}
