import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('throwError is exported', () => {
	assert.ok(
		'throwError' in solution,
		'🚨 Make sure you export "throwError" - add: export { throwError, ... }',
	)
})

await test('throwError should throw an error', () => {
	assert.throws(
		() => solution.throwError('Test error'),
		{ message: 'Test error' },
		'🚨 throwError should throw an error with the provided message - use throw new Error()',
	)
})

await test('parseNumber is exported', () => {
	assert.ok(
		'parseNumber' in solution,
		'🚨 Make sure you export "parseNumber" - add: export { throwError, parseNumber, ... }',
	)
})

await test('parseNumber should parse valid numbers', () => {
	assert.strictEqual(
		solution.parseNumber('42'),
		42,
		'🚨 parseNumber("42") should return 42 - use Number(...) to parse the value',
	)
})

await test('parseNumber should throw on invalid input', () => {
	assert.throws(
		() => solution.parseNumber('not-a-number'),
		{ message: 'Invalid number' },
		'🚨 parseNumber should throw "Invalid number" for invalid input',
	)
})

await test('ensurePositive is exported', () => {
	assert.ok(
		'ensurePositive' in solution,
		'🚨 Make sure you export "ensurePositive" - add: export { throwError, parseNumber, ensurePositive }',
	)
})

await test('ensurePositive should return number when positive', () => {
	assert.strictEqual(
		solution.ensurePositive(5),
		5,
		'🚨 ensurePositive(5) should return 5',
	)
})

await test('ensurePositive should throw when negative', () => {
	assert.throws(
		() => solution.ensurePositive(-1),
		{ message: 'Number must be positive' },
		'🚨 ensurePositive should throw "Number must be positive" for negatives',
	)
})
