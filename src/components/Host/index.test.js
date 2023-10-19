import { render, screen } from '@testing-library/react';
import Host from '.';

describe('Host testing', () => {
    it('should render', () => {
    const firstName = 'Jeanne'
    const lastName = 'Dove'

        const picture = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
    
        render(
            <Host name={firstName + ' ' + lastName} picture={picture} />
        )
    
        const host = screen.getByTestId('host')

        expect(host.childElementCount).toBe(2)
       
        expect(screen.getByText(firstName)).toBeTruthy()
        expect(screen.getByText(lastName)).toBeTruthy()

        expect(screen.getByRole('img')).toHaveAttribute('src', picture)
    })
})