const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Monkey Patching just works at common JS, not in es6 modules need use jest.mock()

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup
utils.getWinner = originalGetWinner
