import { render, screen } from '@testing-library/react';
import Card from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Card testing', () => {
    it('should render', () => {
        const id = "c67ab8a7"
		const title = "Appartement cosy"
		const cover = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"

        render(
            <Router>
                <Card id={id} title={title} cover={cover} />
            </Router>
        )

        const card = screen.getByRole('article')

        expect(card.childElementCount).toBe(3)
        expect(screen.getByRole('img')).toHaveAttribute('src', cover)
        expect(
            screen.getByRole('heading', {
              level: 2,
              text: {title}
            })
          ).toBeTruthy()

    })
})