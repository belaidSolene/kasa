import Footer from '.';
import { render, screen } from '@testing-library/react';
import logo from '../../assets/logo/logo-footer.svg'

describe('Footer testing', () => {
    it('should render without crash', () => {
        render(
            <Footer />
        )
        
        const footer = screen.getByTestId('footer')

        expect(footer.childElementCount).toBe(2)
        expect(screen.getByTestId('logo-footer').textContent).toBe(logo)
        expect(screen.getByText('© 2023 Kasa. All rights reserved')).toBeTruthy()
    })
})