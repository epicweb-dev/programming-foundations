import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const {
	throwErrorMessage,
	parseNumber,
	parseNumberError,
	ensurePositive,
	ensurePositiveError,
} = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('throwError should throw an error', () => {
	assert.strictEqual(
		throwErrorMessage,
		'Test error',
		'🚨 throwError should throw an error with the provided message - use throw new Error()',
	)
})

await test('parseNumber should parse valid numbers', () => {
	assert.strictEqual(
		parseNumber,
		42,
		'🚨 parseNumber("42") should return 42 - use Number(...) to parse the value',
	)
})

await test('parseNumber should throw on invalid input', () => {
	assert.strictEqual(
		parseNumberError,
		'Invalid number',
		'🚨 parseNumber should throw "Invalid number" for invalid input',
	)
})

await test('ensurePositive should return number when positive', () => {
	assert.strictEqual(ensurePositive, 5, '🚨 ensurePositive(5) should return 5')
})

await test('ensurePositive should throw when negative', () => {
	assert.strictEqual(
		ensurePositiveError,
		'Number must be positive',
		'🚨 ensurePositive should throw "Number must be positive" for negatives',
	)
})
