import { render , screen, fireEvent, waitFor} from '@testing-library/react';
import Collapse, {capitalizeString} from '.';
import arrow from '../../assets/arrow/arrowCollapse.svg'

describe('Collapse testing when "txt" is a text', () => {
    const title = 'description'
    const txt = "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."

    beforeEach(() => {
        render(
            <Collapse title={title} txt={txt} />
        )
    })

    afterEach(() => render(''))

    it('should render', () => {
        const button = screen.getByRole('button')
        const content = screen.getByTestId('content-collapse')

        expect(screen.getByText(capitalizeString(title))).toBeTruthy()
        expect(button.textContent).toBe(arrow)
        expect(content).toHaveClass('notVisible')
        expect(content).not.toHaveClass('fadeIn')
        expect(screen.getByText(txt)).toBeTruthy()
    })

    it('should open at first click and close with the second one', () => {
        const button = screen.getByRole('button')
        const $arrow = screen.getByText(arrow)
        const content = screen.getByTestId('content-collapse')

        fireEvent.click(button)

        expect($arrow).toHaveClass('rotate')
        expect(content).toHaveClass('fadeIn')
        
        fireEvent.click(button)

        expect($arrow).not.toHaveClass('rotate')
        expect(content).toHaveClass('notVisible')
        expect(content).not.toHaveClass('fadeIn')
        waitFor(() => expect(content).toHaveClass('hidden'))
    })
})

describe('Collapse testing when "txt" is an array', () => {
    it('should render a list', () => {
        const title = 'équipement'
        const txt = [
			"Douche italienne",
			"Frigo",
			"WIFI"
		]

        render(
            <Collapse title={title} txt={txt} />
        )

        expect(screen.getByTestId('content-list').childElementCount).toBe(3)
    })
})