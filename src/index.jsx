import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Error from './pages/Error'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'rental/:idRental',
				element: <Rental />,
				errorElement: <Error />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
