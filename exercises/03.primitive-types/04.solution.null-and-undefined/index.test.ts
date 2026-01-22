import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('discountCode is exported', () => {
	assert.ok(
		'discountCode' in solution,
		'🚨 Make sure you export "discountCode" - add: export { discountCode, ... }',
	)
})

await test('discountCode should be undefined', () => {
	assert.strictEqual(
		solution.discountCode,
		undefined,
		'🚨 discountCode should be undefined - explicitly set it to undefined',
	)
})

await test('lastPurchaseDate is exported', () => {
	assert.ok(
		'lastPurchaseDate' in solution,
		'🚨 Make sure you export "lastPurchaseDate" - add: export { discountCode, lastPurchaseDate }',
	)
})

await test('lastPurchaseDate should be null', () => {
	assert.strictEqual(
		solution.lastPurchaseDate,
		null,
		'🚨 lastPurchaseDate should be null - explicitly set it to the null value',
	)
})
