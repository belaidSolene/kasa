import Header from '.';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header testing', () => {
    it('should render without crash', () => {
        render(
            <Router>
                <Header />
            </Router>
        )
        
        const header = screen.getByTestId('header')

        expect(header.childElementCount).toBe(2)
        expect(screen.getByRole('img')).toBeTruthy()

        const nav = screen.getByRole('navigation')
        expect(nav).toBeTruthy()
        expect(nav.childElementCount).toBe(2)       
        expect(screen.getByText('Accueil').closest('a')).toHaveAttribute('href', '/')
        expect(screen.getByText('A Propos').closest('a')).toHaveAttribute('href', '/about')
    })
})