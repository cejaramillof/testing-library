import * as React from 'react'
import {render, within, queries} from '@testing-library/react'
import {Modal} from '../modal'

// getByTestId per default will search at Body of element rendered. (not just element)
test('modal shows the children', () => {
  render(
    <Modal>
      <div data-testid="test" />
    </Modal>,
  )
  const {getByTestId} = within(document.getElementById('modal-root'))
  expect(getByTestId('test')).toBeInTheDocument()
})


test('modal shows the children', () => {
  const bodyUtils = render(
    <>
      <div data-testid="foo" />
      <Modal>
        <div data-testid="test" />
      </Modal>
    </>,
    {
      // Also too can specify root element, and just use the getElementById returned by this render
      // baseElement: document.getElementById('modal-root')
    }
  )
  const {getByTestId} = within(document.getElementById('modal-root'))

  getByTestId('foo') // not in the scope of the element

  bodyUtils.getByTestId('foo') // found it

  within(document.body).getByTestId('foo') // found it

  queries.getByTestId(document.body, 'foo') // found it

  expect(getByTestId('test')).toBeInTheDocument()
})
