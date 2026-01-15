import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { calculateTax, formatPrice, applyDiscount } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('calculateTax should calculate tax correctly', () => {
	assert.strictEqual(
		calculateTax[0],
		8,
		'🚨 calculateTax(100, 0.08) should return 8 - multiply the amount by the tax rate',
	)
	assert.strictEqual(
		calculateTax[1],
		5,
		'🚨 calculateTax(50, 0.1) should return 5 - multiply the amount by the tax rate',
	)
})

await test('formatPrice should format cents as dollars', () => {
	assert.strictEqual(
		formatPrice[0],
		'$19.99',
		'🚨 formatPrice(1999) should return "$19.99" - divide by 100 and format with dollar sign and 2 decimals',
	)
	assert.strictEqual(
		formatPrice[1],
		'$1.00',
		'🚨 formatPrice(100) should return "$1.00" - divide by 100 and format with dollar sign and 2 decimals',
	)
	assert.strictEqual(
		formatPrice[2],
		'$0.50',
		'🚨 formatPrice(50) should return "$0.50" - divide by 100 and format with dollar sign and 2 decimals',
	)
})

await test('applyDiscount should apply discount percentage', () => {
	assert.strictEqual(
		applyDiscount[0],
		80,
		'🚨 applyDiscount(100, 20) should return 80 - subtract the discount percentage from the price',
	)
	assert.strictEqual(
		applyDiscount[1],
		45,
		'🚨 applyDiscount(50, 10) should return 45 - subtract the discount percentage from the price',
	)
	assert.strictEqual(
		applyDiscount[2],
		150,
		'🚨 applyDiscount(200, 25) should return 150 - subtract the discount percentage from the price',
	)
})
