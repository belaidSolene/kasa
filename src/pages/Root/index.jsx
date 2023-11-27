/**
 * The Root component serves as the fundamental structure for all pages in the project.
 * The 'container' class from the associated CSS module defines the styling for the overall layout.
 * This component acts as a skeleton, providing a consistent layout for the entire application.
 * Any specific page content or additional components are rendered within the Outlet.
 */

import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import style from './root.module.css'

export default function Root() {
	// JSX structure defining the layout with Header, Outlet, and Footer components
	return (
		<div id={style.container}>
			<Header />

			<Outlet />

			<Footer />
		</div>
	)
}
