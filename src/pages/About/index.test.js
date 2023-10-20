import { render, screen } from '@testing-library/react';
import About from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { aboutDatas } from '../../datas/about';


describe('About testing', () => {
    it('should render', () => {
        render(
            <Router>
                <About />
            </Router>
        )

        expect(screen.getByRole('img')).toBeTruthy()
        expect(screen.getAllByTestId('content-collapse').length).toEqual(aboutDatas.length)
    })
})