import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

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

await test('hadError is exported', () => {
	assert.ok('hadError' in solution, '🚨 Make sure you export "hadError"')
})

await test('hadError should be true for invalid input', () => {
	assert.strictEqual(
		solution.hadError,
		true,
		'🚨 hadError should be true when the input is invalid',
	)
})
