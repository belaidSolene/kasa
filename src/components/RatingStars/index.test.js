import { render, screen } from '@testing-library/react';
import RatingStars from '.';
import activeStar from '../../assets/star/star-active.svg'

describe('RatingStars testing', () => {
    it('should render', () => {
        const rating = 4

        render(
            <RatingStars rating={rating} />
        )

        const ratingStars = screen.getByTestId('rating-stars')

        expect(ratingStars).toBeTruthy()
        expect(ratingStars.childElementCount).toBe(5)
        expect(screen.getAllByText(activeStar).length).toBe(rating)
    })
})