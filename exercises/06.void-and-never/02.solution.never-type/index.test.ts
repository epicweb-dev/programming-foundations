import assert from 'node:assert/strict'
import { test } from 'node:test'
import { throwError, parseNumber, ensurePositive } from './index.ts'

await test('throwError should throw an error', () => {
	assert.throws(
		() => throwError('Test error'),
		{ message: 'Test error' },
		'🚨 throwError should throw an error with the provided message - use throw new Error()',
	)
})

await test('parseNumber should parse valid numbers', () => {
	assert.strictEqual(
		parseNumber('42'),
		42,
		'🚨 parseNumber("42") should return 42 - use Number(...) to parse the value',
	)
})

await test('parseNumber should throw on invalid input', () => {
	assert.throws(
		() => parseNumber('not-a-number'),
		{ message: 'Invalid number' },
		'🚨 parseNumber should throw "Invalid number" for invalid input',
	)
})

await test('ensurePositive should return number when positive', () => {
	assert.strictEqual(
		ensurePositive(5),
		5,
		'🚨 ensurePositive(5) should return 5',
	)
})

await test('ensurePositive should throw when negative', () => {
	assert.throws(
		() => ensurePositive(-1),
		{ message: 'Number must be positive' },
		'🚨 ensurePositive should throw "Number must be positive" for negatives',
	)
})
