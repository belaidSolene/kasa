import { Link } from 'react-router-dom'

export default function Card({ id, title, picture }) {
	return (
		<Link to={`rental/${id}`}>
			<article>
				<img src={picture} alt={title} />
				<h2>{title}</h2>
			</article>
		</Link>
	)
}
