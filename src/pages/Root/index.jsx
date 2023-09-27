import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import style from './root.module.css'

export default function Root() {
	return (
		<div id={style.container}>
			<Header />

			<section>
				<Outlet />
			</section>

			<Footer />
		</div>
	)
}
