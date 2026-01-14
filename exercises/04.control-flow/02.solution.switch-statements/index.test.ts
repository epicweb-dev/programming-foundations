import assert from 'node:assert/strict'
import { test } from 'node:test'
import { grade, description } from './index.ts'

await test('grade should be "B"', () => {
	assert.strictEqual(
		grade,
		'B',
		'🚨 grade should be "B" - check your variable assignment',
	)
})

await test('description should be "Good" for grade "B"', () => {
	assert.strictEqual(
		description,
		'Good',
		'🚨 description should be "Good" for grade "B" - use a switch statement to match grade to description',
	)
})
