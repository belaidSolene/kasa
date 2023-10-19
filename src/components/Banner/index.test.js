
import Banner from '.'
import { render, screen } from '@testing-library/react'
import bannerHome from '../../assets/banner/bannerHome.png'


describe('Banner testing', () => {
    it('should render img && title', () => {
        const title = 'A title'
        render(
            <Banner img={bannerHome} title={title} />
        )

        expect(screen.getByRole('img')).toBeTruthy()
        expect(
            screen.getByRole('heading', {
              level: 1,
              text: {title}
            })
          ).toBeTruthy()
    })

    it('should only render an img', () => {
        render(
            <Banner img={bannerHome} />
        )

        expect(screen.getByRole('img')).toHaveAttribute('src', bannerHome)
        expect(screen.queryByRole('heading')).not.toBeTruthy()
    })
})