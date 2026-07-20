import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('calculateTax is exported', () => {
	assert.ok(
		'calculateTax' in solution,
		'🚨 Make sure you export "calculateTax" - add: export { calculateTax, ... }',
	)
})

await test('calculateTax should calculate tax correctly', () => {
	assert.strictEqual(
		solution.calculateTax(100, 0.08),
		8,
		'🚨 calculateTax(100, 0.08) should return 8',
	)
	assert.strictEqual(
		solution.calculateTax(50, 0.1),
		5,
		'🚨 calculateTax(50, 0.1) should return 5',
	)
})

await test('formatPrice is exported', () => {
	assert.ok(
		'formatPrice' in solution,
		'🚨 Make sure you export "formatPrice" - add: export { calculateTax, formatPrice, ... }',
	)
})

await test('formatPrice should format cents as dollars', () => {
	assert.strictEqual(
		solution.formatPrice(1999),
		'$19.99',
		'🚨 formatPrice(1999) should return "$19.99"',
	)
	assert.strictEqual(
		solution.formatPrice(100),
		'$1.00',
		'🚨 formatPrice(100) should return "$1.00"',
	)
	assert.strictEqual(
		solution.formatPrice(50),
		'$0.50',
		'🚨 formatPrice(50) should return "$0.50"',
	)
})

await test('applyDiscount is exported', () => {
	assert.ok(
		'applyDiscount' in solution,
		'🚨 Make sure you export "applyDiscount" - add: export { calculateTax, formatPrice, applyDiscount }',
	)
})

await test('applyDiscount should apply discount percentage', () => {
	assert.strictEqual(
		solution.applyDiscount(100, 20),
		80,
		'🚨 applyDiscount(100, 20) should return 80',
	)
	assert.strictEqual(
		solution.applyDiscount(50, 10),
		45,
		'🚨 applyDiscount(50, 10) should return 45',
	)
	assert.strictEqual(
		solution.applyDiscount(200, 25),
		150,
		'🚨 applyDiscount(200, 25) should return 150',
	)
})
