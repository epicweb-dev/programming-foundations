import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('parseNumber is exported', () => {
	assert.ok('parseNumber' in solution, '🚨 Make sure you export "parseNumber"')
})

await test('parseNumber returns a number for valid input', () => {
	assert.strictEqual(
		solution.parseNumber('42'),
		42,
		'🚨 parseNumber should return 42 when given "42"',
	)
})

await test('parseNumber throws for invalid input', () => {
	assert.throws(
		() => solution.parseNumber('not-a-number'),
		{
			message: 'Invalid number: not-a-number',
		},
		'🚨 parseNumber should throw an Error for invalid input',
	)
})

await test('resultMessage is exported', () => {
	assert.ok(
		'resultMessage' in solution,
		'🚨 Make sure you export "resultMessage"',
	)
})

await test('resultMessage should show the error message', () => {
	assert.strictEqual(
		solution.resultMessage,
		'Error: Invalid number: not-a-number',
		'🚨 resultMessage should include the thrown error message',
	)
})
