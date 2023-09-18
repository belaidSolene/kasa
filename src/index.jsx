import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Error from './components/Error'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/accueil',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/rental/:idRental',
				element: <Rental />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
