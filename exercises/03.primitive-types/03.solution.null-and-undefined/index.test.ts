import assert from 'node:assert/strict'
import { test } from 'node:test'
import { discountCode, lastPurchaseDate } from './index.ts'

await test('discountCode should be undefined', () => {
	assert.strictEqual(
		discountCode,
		undefined,
		'🚨 discountCode should be undefined - declare the variable without assigning a value, or explicitly set it to undefined',
	)
})

await test('lastPurchaseDate should be null', () => {
	assert.strictEqual(
		lastPurchaseDate,
		null,
		'🚨 lastPurchaseDate should be null - explicitly set it to the null value',
	)
})
