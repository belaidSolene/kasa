import React from 'react';
import { render, screen } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import Rental from '.';
import { rentals } from '../../datas/rentals'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('Rental testing', () => {
  it('should renders when rental is available', () => {
    const {
        id, 
        title,
        pictures,
        description,
        host,
        location,
        equipments,
        tags,} = rentals[0]

    useParams.mockReturnValue({ idRental: id })

   render(<Rental />);

   expect(screen.getByText(title.toUpperCase())).toBeTruthy()
   expect(screen.getByText(location)).toBeTruthy()
   expect(screen.getByText(tags[0])).toBeTruthy()
   expect(screen.getByText(equipments[0])).toBeTruthy()
   expect(screen.getByText(description)).toBeTruthy()
   expect(screen.getByText('1 / 5')).toBeTruthy()

   const imgDisplayed = screen.getAllByRole('img')

   expect(imgDisplayed.length).toEqual(2)
   expect(imgDisplayed[0]).toHaveAttribute('src', pictures[0])
   expect(imgDisplayed[1]).toHaveAttribute('src', host.picture)

   expect(screen.getByTestId('rating-stars')).toBeTruthy()
  });

  // it should redirect whent rental is invailabel
})
