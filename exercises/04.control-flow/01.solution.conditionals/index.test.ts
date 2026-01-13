import assert from 'node:assert/strict'
import { test } from 'node:test'
import { score, grade, passed } from './index.ts'

await test('score should be 85', () => {
	assert.strictEqual(
		score,
		85,
		'🚨 score should be 85 - check your variable assignment',
	)
})

await test('grade should be "B" for score 85', () => {
	assert.strictEqual(
		grade,
		'B',
		'🚨 grade should be "B" for score 85 - use if/else if statements to check score ranges (80-89 = B)',
	)
})

await test('passed should be true for grade "B"', () => {
	assert.strictEqual(
		passed,
		true,
		'🚨 passed should be true for grade "B" - check that grades A, B, and C are considered passing',
	)
})
