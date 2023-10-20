import { render, screen } from '@testing-library/react';
import ErrorPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ErrorPage testing', () => {
    it('should render', () => {
        render(
            <Router>
                <ErrorPage />
            </Router>
        )

        expect(screen.getByRole('heading', {
            level: 1,
            text: '404'
        })).toBeTruthy()

        expect(screen.getByRole('heading', {
            level: 2,
            text: 'Oups ! La page que vous demandez n\'existe pas.'
        })).toBeTruthy()

        expect(screen.getByRole('link').textContent).toBe('Retourner sur la page d\'accueil')
    })
})