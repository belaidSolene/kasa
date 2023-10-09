import { rentals } from '../datas/rentals'

export function getRental(id) {
 return rentals.find((rental) => rental.id === id) || null
}