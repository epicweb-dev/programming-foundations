import assert from 'node:assert/strict'
import { test } from 'node:test'
import { prices, total, expensiveItemCount } from './index.ts'

await test('total should be sum of all prices', () => {
	// 29.99 + 9.99 + 49.99 + 4.99 + 19.99 = 114.95
	assert.ok(
		Math.abs(total - 114.95) < Math.pow(10, -2),
		'🚨 total should be 114.95 - use a loop to sum all prices in the array',
	)
})

await test('expensiveItemCount should count items > $10', () => {
	// Items > 10: 29.99, 49.99, 19.99 = 3 items
	assert.strictEqual(
		expensiveItemCount,
		3,
		'🚨 expensiveItemCount should be 3 - use a loop to count prices greater than 10',
	)
})

await test('prices array should have 5 items', () => {
	assert.strictEqual(
		prices.length,
		5,
		'🚨 prices array should have 5 items - check your array initialization',
	)
})
