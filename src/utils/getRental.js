import { rentals } from '../datas/rentals'

// Function that retrieves a rental by its identifier (id)
export function getRental(id) {
	return rentals.find((rental) => rental.id === id) || null
}
