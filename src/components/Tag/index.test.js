import { render, screen } from '@testing-library/react';
import Tag from '.';

describe('Tag testing', () => {
    it('should render', () => {
        const tags = ['loft', 'sunny', 'fireplace']

        render(
            <Tag tags={tags} />
        )

        const tagsList = screen.getByTestId('tags-list')

        expect(tagsList).toBeTruthy()
        expect(tagsList.childElementCount).toBe(3)
    })
})