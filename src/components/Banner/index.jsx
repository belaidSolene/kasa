import style from './banner.module.css'

export default function Banner({ img, title }) {
	return (
		<div className={style.banner}>
			<img src={img} alt='' />
			{title && <h1>{title}</h1>}
		</div>
	)
}
