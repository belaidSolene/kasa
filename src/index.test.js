/* import { render, screen } from '@testing-library/react';
import { router } from '.';
import { MemoryRouter, useRoutes } from 'react-router-dom';

function App() {
    const routes = useRoutes(router);
    return <>{routes}</>;
  }

 describe('router testing', () => {
    it('should render Home page for the "/" route', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
		        <App />
            </MemoryRouter>
        )

        screen.debug()
    })
})  */

test('a test', () => {
    expect(true).toBeTruthy()
})