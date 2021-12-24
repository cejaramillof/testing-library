// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math')

let result, expected

result = sum(3, 7)
expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(7, 3)
expected = 4
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}



// OWN SOLUTION ------------------------------------------

const customExpect = (expected, result) => {
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
  }
}

customExpect(10, sum(3, 7));
customExpect(4, subtract(7, 3));


const expect = (result) => ({
  toBe: (expected) => {
    if (result !== expected) {
      throw new Error(`${result} is not equal to ${expected}`)
    }
  }
})

expect(sum(3, 7)).toBe(10);
expect(subtract(7, 3)).toBe(4);
