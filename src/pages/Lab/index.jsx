import { rentals } from '../../datas/rentals'
import Shutter from '../../components/Shutter'

export default function Lab() {
	const rental = rentals[0]

	return (
		<div>
			<h1>A louer Lab</h1>

			<Shutter btn='description' txt={rental.description} />
		</div>
	)
}
