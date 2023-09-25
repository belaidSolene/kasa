import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../utils/style/colors'
import logo from '../../assets/logos/logo-header.svg'

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	color: ${colors.primary};
`

export default function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt='kasa' />
			<nav>
				<NavLink to='/'>
					{({ isActive, isPending }) => (
						<span
							className={
								isActive ? 'active' : ''
							}
						>
							Accueil
						</span>
					)}
				</NavLink>

				<NavLink to='about'>
					{({ isActive, isPending }) => (
						<span
							className={
								isActive ? 'active' : ''
							}
						>
							A propos
						</span>
					)}
				</NavLink>
			</nav>
		</HeaderContainer>
	)
}
