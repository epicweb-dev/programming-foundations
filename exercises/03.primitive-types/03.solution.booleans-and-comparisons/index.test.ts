import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('isAvailable is exported', () => {
	assert.ok(
		'isAvailable' in solution,
		'🚨 Make sure you export "isAvailable" - add: export { isAvailable, ... }',
	)
})

await test('isAvailable should be true', () => {
	assert.strictEqual(
		solution.isAvailable,
		true,
		'🚨 isAvailable should be true - check your assignment',
	)
	assert.strictEqual(
		typeof solution.isAvailable,
		'boolean',
		'🚨 isAvailable should be a boolean type - use true or false, not a string',
	)
})

await test('hasDiscount is exported', () => {
	assert.ok(
		'hasDiscount' in solution,
		'🚨 Make sure you export "hasDiscount" - add: export { isAvailable, hasDiscount, ... }',
	)
})

await test('hasDiscount should be true (price < 50)', () => {
	assert.strictEqual(
		solution.hasDiscount,
		true,
		'🚨 hasDiscount should be true when price is under 50 - use a comparison against price',
	)
})

await test('hasDiscount should be a boolean type', () => {
	assert.strictEqual(
		typeof solution.hasDiscount,
		'boolean',
		'🚨 hasDiscount should be a boolean type - compare price to 50',
	)
})

await test('canPurchase is exported', () => {
	assert.ok(
		'canPurchase' in solution,
		'🚨 Make sure you export "canPurchase" - add: export { ..., canPurchase }',
	)
})

await test('canPurchase should be true (isAvailable && stockCount > 0)', () => {
	assert.strictEqual(
		solution.canPurchase,
		true,
		'🚨 canPurchase should be true when the item is available and stockCount is greater than 0',
	)
	assert.strictEqual(
		typeof solution.canPurchase,
		'boolean',
		'🚨 canPurchase should be a boolean type - combine the availability and stock checks',
	)
})

await test('isNotAvailable is exported', () => {
	assert.ok(
		'isNotAvailable' in solution,
		'🚨 Make sure you export "isNotAvailable" - add: export { ..., isNotAvailable }',
	)
})

await test('isNotAvailable should be false (!isAvailable)', () => {
	assert.strictEqual(
		solution.isNotAvailable,
		false,
		'🚨 isNotAvailable should be false (the opposite of isAvailable, which is true)',
	)
	assert.strictEqual(
		typeof solution.isNotAvailable,
		'boolean',
		'🚨 isNotAvailable should be a boolean type - invert isAvailable',
	)
})
