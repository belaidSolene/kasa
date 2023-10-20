import Root from '.';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

describe('Root testing', () => {
    it('should render', () => {
        render(
            <Router>
                <Root />
            </Router>
        )

        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})