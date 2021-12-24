import * as React from 'react'
import {render} from '@testing-library/react'

import {axe, toHaveNoViolations} from 'jest-axe'
expect.extend(toHaveNoViolations)

// import 'jest-axe/extend-expect'

function InaccessibleForm() {
  return (
    <form>
      <input placeholder="email" />
    </form>
  )
}

function AccessibleForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" />
    </form>
  )
}

test('inaccessible forms fail axe', async () => {
  const {container} = render(<InaccessibleForm />)
  try {
    expect(await axe(container)).toHaveNoViolations()
  } catch (error) {
    // NOTE: I can't think of a situation where you'd want to test that some HTML
    // actually _does_ have accessibility issues... This is only here for
    // demonstration purposes.
  }
})

test('accessible forms pass axe', async () => {
  const {container} = render(<AccessibleForm />)
  const results = await axe(container);
  expect(result.violations).toHaveLength(0)

  expect(await axe(container)).toHaveNoViolations()
})
