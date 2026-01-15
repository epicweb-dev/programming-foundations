import assert from 'node:assert/strict'
import { test } from 'node:test'
import { output } from './index.ts'

await test('output should match the star staircase', () => {
	const expected = '*\n**\n***\n****\n*****\n'
	assert.strictEqual(
		output,
		expected,
		'🚨 output should be a 5-line staircase of stars',
	)
})
