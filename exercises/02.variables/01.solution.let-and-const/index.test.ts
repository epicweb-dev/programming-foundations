import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('TAX_RATE is exported', () => {
	assert.ok(
		'TAX_RATE' in solution,
		'🚨 Make sure you export "TAX_RATE" - add: export { TAX_RATE, ... }',
	)
})

await test('TAX_RATE should be 0.08', () => {
	assert.strictEqual(
		solution.TAX_RATE,
		0.08,
		'🚨 TAX_RATE should be 0.08 - use const for a value that never changes',
	)
})

await test('cartTotal is exported', () => {
	assert.ok(
		'cartTotal' in solution,
		'🚨 Make sure you export "cartTotal" - add: export { TAX_RATE, cartTotal, ... }',
	)
})

await test('cartTotal should be calculated correctly', () => {
	// cartTotal = bookPrice + muffinPrice = 15.99 + 4.5 = 20.49
	assert.ok(
		Math.abs(solution.cartTotal - 20.49) < Math.pow(10, -2),
		'🚨 cartTotal should be 20.49 - add bookPrice and muffinPrice together',
	)
})

await test('finalTotal is exported', () => {
	assert.ok(
		'finalTotal' in solution,
		'🚨 Make sure you export "finalTotal" - add: export { TAX_RATE, cartTotal, finalTotal }',
	)
})

await test('finalTotal should include tax', () => {
	// finalTotal = cartTotal + cartTotal * TAX_RATE = 20.49 + 20.49 * 0.08 = 22.1292
	assert.ok(
		Math.abs(solution.finalTotal - 22.1292) < Math.pow(10, -4),
		'🚨 finalTotal should be 22.1292 - add the tax (cartTotal * TAX_RATE) to cartTotal',
	)
})
