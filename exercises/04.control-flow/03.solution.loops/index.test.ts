import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('output is exported', () => {
	assert.ok(
		'output' in solution,
		'🚨 Make sure you export "output" - add: export { output }',
	)
})

await test('output should match the star staircase', () => {
	const expected = '*\n**\n***\n****\n*****\n'
	assert.strictEqual(
		solution.output,
		expected,
		'🚨 output should be a 5-line staircase of stars (each row has one more star than the previous)',
	)
})
