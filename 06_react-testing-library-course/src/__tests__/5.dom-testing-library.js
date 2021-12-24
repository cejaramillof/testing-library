import React from 'react'
import ReactDOM from 'react-dom'
import { queries, getQueriesForElement } from '@testing-library/dom';
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  // will improve better, because check the htmlFor a11y, and validate the label at the same time
  const inputOld = queries.getByLabelText(div, 'Favorite Number')
  const input = queries.getByLabelText(div, /favorite Number/i) // when the case sensitive isn't important
  expect(input).toHaveAttribute('type', 'number')


  const { getByLabelText } = getQueriesForElement(div)
  const input = getByLabelText(/favorite Number/i)
  expect(input).toHaveAttribute('type', 'number')
})

// disabled for the purpose of this lesson. We'll get to this later
/*
eslint
  testing-library/no-dom-import: "off",
  testing-library/prefer-screen-queries: "off"
*/
