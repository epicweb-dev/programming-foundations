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

await test('isOnSale is exported', () => {
	assert.ok(
		'isOnSale' in solution,
		'🚨 Make sure you export "isOnSale" - add: export { isAvailable, isOnSale, ... }',
	)
})

await test('isOnSale should be false', () => {
	assert.strictEqual(
		solution.isOnSale,
		false,
		'🚨 isOnSale should be false - check your assignment',
	)
	assert.strictEqual(
		typeof solution.isOnSale,
		'boolean',
		'🚨 isOnSale should be a boolean type - use true or false, not a string',
	)
})

await test('hasDiscount is exported', () => {
	assert.ok(
		'hasDiscount' in solution,
		'🚨 Make sure you export "hasDiscount" - add: export { ..., hasDiscount, ... }',
	)
})

await test('hasDiscount should be true (price < 50)', () => {
	assert.strictEqual(
		solution.hasDiscount,
		true,
		'🚨 hasDiscount should be true when price is less than 50 - use: price < 50',
	)
	assert.strictEqual(
		typeof solution.hasDiscount,
		'boolean',
		'🚨 hasDiscount should be a boolean type - use a comparison that returns true or false',
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
		'🚨 canPurchase should be true when both isAvailable is true AND stockCount > 0 - use the && operator',
	)
	assert.strictEqual(
		typeof solution.canPurchase,
		'boolean',
		'🚨 canPurchase should be a boolean type - use a logical expression that returns true or false',
	)
})
