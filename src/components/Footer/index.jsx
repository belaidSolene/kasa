import { ReactComponent as Logo } from '../../assets/logos/logo-footer.svg'
import styled from 'styled-components'

import { colors } from '../../utils/style/colors'

const FooterContainer = styled.footer`
	background-color: ${colors.black};
	color: ${colors.white};
	text-align: center;
	padding: 6.3rem;
`

const Copyright = styled.p`
	padding-top: 1rem;
`

export default function Footer() {
	return (
		<FooterContainer>
			<Logo />
			<Copyright>© 2023 Kasa. All rights reserved</Copyright>
		</FooterContainer>
	)
}
