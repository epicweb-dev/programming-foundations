import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('getMessage is exported', () => {
	assert.ok(
		'getMessage' in solution,
		'🚨 Make sure you export "getMessage" - add: export { getMessage }',
	)
})

await test('getMessage returns the expected message', () => {
	assert.strictEqual(
		solution.getMessage(),
		'Hello, functions!',
		'🚨 getMessage() should return "Hello, functions!"',
	)
})
