import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { isAvailable, isOnSale, hasDiscount, canPurchase } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('isAvailable should be true', () => {
	assert.strictEqual(
		isAvailable,
		true,
		'🚨 isAvailable should be true - check your comparison or assignment',
	)
	assert.strictEqual(
		typeof isAvailable,
		'boolean',
		'🚨 isAvailable should be a boolean type - use true or false, not a string',
	)
})

await test('isOnSale should be false', () => {
	assert.strictEqual(
		isOnSale,
		false,
		'🚨 isOnSale should be false - check your comparison or assignment',
	)
	assert.strictEqual(
		typeof isOnSale,
		'boolean',
		'🚨 isOnSale should be a boolean type - use true or false, not a string',
	)
})

await test('hasDiscount should be true (price < 50)', () => {
	assert.strictEqual(
		hasDiscount,
		true,
		'🚨 hasDiscount should be true when price is less than 50 - check your comparison operator',
	)
	assert.strictEqual(
		typeof hasDiscount,
		'boolean',
		'🚨 hasDiscount should be a boolean type - use a comparison that returns true or false',
	)
})

await test('canPurchase should be true (isAvailable && stockCount > 0)', () => {
	assert.strictEqual(
		canPurchase,
		true,
		'🚨 canPurchase should be true when both isAvailable is true AND stockCount > 0 - use the && operator',
	)
	assert.strictEqual(
		typeof canPurchase,
		'boolean',
		'🚨 canPurchase should be a boolean type - use a logical expression that returns true or false',
	)
})
