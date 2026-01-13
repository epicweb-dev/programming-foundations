import assert from 'node:assert/strict'
import { test } from 'node:test'
import { prices, total, highestPrice, average } from './index.ts'

await test('total should be sum of all prices', () => {
	// 29.99 + 9.99 + 49.99 + 4.99 + 19.99 = 114.95
	assert.ok(
		Math.abs(total - 114.95) < Math.pow(10, -2),
		'🚨 total should be 114.95 - use a for...of loop to iterate and sum all prices',
	)
})

await test('highestPrice should be 49.99', () => {
	assert.ok(
		Math.abs(highestPrice - 49.99) < Math.pow(10, -2),
		'🚨 highestPrice should be 49.99 - use a for...of loop to find the maximum price',
	)
})

await test('average should be calculated correctly', () => {
	// average = total / prices.length = 114.95 / 5 = 22.99
	assert.ok(
		Math.abs(average - 22.99) < Math.pow(10, -2),
		'🚨 average should be 22.99 - divide the total by the number of prices',
	)
})
