import React from 'react'
import {render, screen} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'


import { getQueriesForElement } from '@testing-library/dom';
// testing-library render own
function manualRender(ui) {
  const container = document.createElement('div')
  ReactDOM.render(ui, container)
  const queries = getQueriesForElement(container)
  return { container, ...queries }
}

test('renders a number input with a label "Favorite Number"', () => {
  // old way
  const { getByLabelText, debug } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite Number/i)

  // new way
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)

  expect(input).toHaveAttribute('type', 'number')


  debug()
  debug(input)
})
