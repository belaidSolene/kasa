import { useParams } from 'react-router-dom'

function Rental() {
	const { idRental } = useParams()

	return (
		<div>
			<h1>A louer {idRental}</h1>
		</div>
	)
}

export default Rental
