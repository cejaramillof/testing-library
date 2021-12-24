import React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  // new way
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  userEvent.type(input, '10')
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})
