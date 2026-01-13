import assert from 'node:assert/strict'
import { test } from 'node:test'
import { TAX_RATE, cartTotal, finalTotal } from './index.ts'

await test('TAX_RATE should be 0.08', () => {
	assert.strictEqual(
		TAX_RATE,
		0.08,
		'🚨 TAX_RATE should be 0.08 - use const for a value that never changes',
	)
})

await test('cartTotal should be calculated correctly', () => {
	// cartTotal = bookPrice + coffeePrice = 15.99 + 4.5 = 20.49
	assert.ok(
		Math.abs(cartTotal - 20.49) < Math.pow(10, -2),
		'🚨 cartTotal should be 20.49 - add bookPrice and coffeePrice together',
	)
})

await test('finalTotal should include tax', () => {
	// finalTotal = cartTotal + cartTotal * TAX_RATE = 20.49 + 20.49 * 0.08 = 22.1292
	assert.ok(
		Math.abs(finalTotal - 22.1292) < Math.pow(10, -4),
		'🚨 finalTotal should be 22.1292 - add the tax (cartTotal * TAX_RATE) to cartTotal',
	)
})
