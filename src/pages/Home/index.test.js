import { render, screen } from '@testing-library/react';
import Home from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { rentals } from '../../datas/rentals';

describe('Home testing', () => {
    it('should render', () => {
        render(
            <Router>
                <Home />
            </Router>
        )
        
        expect(screen.getByRole('heading', {
                level: 1,
                text: 'Chez vous, partout et ailleurs'
            })
        ).toBeTruthy()

       expect(screen.getAllByRole('article').length).toEqual(rentals.length)
    })
})