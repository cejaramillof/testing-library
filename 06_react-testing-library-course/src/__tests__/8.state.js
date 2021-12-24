import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  // old way
  const { getByLabelText, getByRole } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, { target: { value: '10' }})
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})
