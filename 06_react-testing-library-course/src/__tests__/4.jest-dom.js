import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

import { toHaveAttribute, toHaveTextContent } from '@testing-library/jest-dom'
expect.extend({ toHaveAttribute, toHaveTextContent })

// import jestDOM from '@testing-library/jest-dom'
// expect.extend(jestDOM);

// import '@testing-library/jest-dom/extend-expect'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  
  // improve error description
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
