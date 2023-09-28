import { useParams } from 'react-router-dom'

export default function Rental() {
	const { idRental } = useParams()
	console.log(idRental)

	return (
		<div>
			<h1>A louer {idRental}</h1>
		</div>
	)
}
