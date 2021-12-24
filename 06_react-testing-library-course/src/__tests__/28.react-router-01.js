import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Main} from '../main'

// import {createMemoryHistory} from 'history'

test('main renders about and home and I can navigate to those pages', () => {
  // const history = createMemoryHistory({initialEntries: ['/']})
  // render(<Router history={history}><Main /></Router>)

  window.history.pushState({}, 'Test page', '/')
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
  )
  expect(screen.getByRole('heading')).toHaveTextContent(/home/i)
  userEvent.click(screen.getByText(/about/i))
  expect(screen.getByRole('heading')).toHaveTextContent(/about/i)
})
