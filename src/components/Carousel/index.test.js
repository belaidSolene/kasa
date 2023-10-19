import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '.';
import arrowPrev  from '../../assets/arrow/arrowCarouselPrev.svg'
import arrowNext  from '../../assets/arrow/arrowCarouselNext.svg'


describe('Carousel testing', () => {
    const pictures = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]

    beforeEach(() => {
        render(
            <Carousel pictures={pictures} />
        )
    })

    afterEach(() => {
        render('')
    })

    it('should render', () => {
        expect(screen.getByRole('img')).toHaveAttribute('src', pictures[0])
        expect(screen.getByText(arrowNext)).toBeTruthy()
        expect(screen.getByText(arrowPrev)).toBeTruthy()
        expect(screen.getByText(`1 / ${pictures.length}`)).toBeTruthy()
    })

    describe('when the previous button is clicked', () => {
        it ('should display the last picture', () => {
            const prevBtn = screen.getByTestId('prevBtn')
            let index = pictures.length - 1
            
            fireEvent.click(prevBtn)
     
            expect(screen.getByRole('img')).toHaveAttribute('src', pictures[index])
            expect(screen.getByText(`${index + 1} / ${pictures.length}`)).toBeTruthy()
     
            fireEvent.click(prevBtn)
            index--
     
            expect(screen.getByRole('img')).toHaveAttribute('src', pictures[index])
            expect(screen.getByText(`${index + 1} / ${pictures.length}`)).toBeTruthy()
             
        })
    }) 

    describe('when the next button is clicked', () => {
        it('should display the second picture', () => {
            const nextBtn = screen.getByTestId('nextBtn')
            let index = 0
    
            fireEvent.click(nextBtn)
            index++
    
            expect(screen.getByRole('img')).toHaveAttribute('src', pictures[index])
            expect(screen.getByText(`${index + 1} / ${pictures.length}`)).toBeTruthy()
    
            fireEvent.click(nextBtn)
            index++
            
            expect(screen.getByRole('img')).toHaveAttribute('src', pictures[index])
            expect(screen.getByText(`${index + 1} / ${pictures.length}`)).toBeTruthy()
        })
    
        it('should display the first picture when the last one is display', () => {
            const nextBtn = screen.getByTestId('nextBtn')
            let index = 0
            
            while (index !== pictures.length - 1) {
                fireEvent.click(nextBtn)

                index++
            }

            expect(screen.getByRole('img')).toHaveAttribute('src', pictures[index++])

            fireEvent.click(nextBtn)

            expect(screen.getByRole('img')).toHaveAttribute('src', pictures[0])
        })
    })

})