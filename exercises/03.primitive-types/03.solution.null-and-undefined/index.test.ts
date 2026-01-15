import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { discountCode, lastPurchaseDate } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('discountCode should be undefined', () => {
	assert.strictEqual(
		discountCode,
		'undefined',
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
