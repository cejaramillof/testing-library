import React from 'react'
import {render} from '@testing-library/react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../../themes'
import CalculatorDisplay from '../calculator-display'

function Wrapper({children}) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}
Wrapper.propTypes = {
  children: PropTypes.node,
}

test('should renders inline snapshot', () => {
  const {container} = render(
    <CalculatorDisplay value="0" />,

    {wrapper: Wrapper},
  )

  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div
      class="emotion-0"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
