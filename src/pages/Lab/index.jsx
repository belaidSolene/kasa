import { rentals } from '../../datas/rentals'
import Shutter from '../../components/Shutter'
import style from './lab.module.css'

export default function Lab() {
	const rental = rentals[0]

	return (
		<div>
			<h1>A louer Lab</h1>

			<div className={style.wrapperShutter}>
				<Shutter
					btn='description'
					txt={rental.description}
				/>
			</div>

			<div className={style.wrapperShutter}>
				<Shutter
					btn='équipements'
					txt={rental.equipments}
				/>
			</div>
		</div>
	)
}
