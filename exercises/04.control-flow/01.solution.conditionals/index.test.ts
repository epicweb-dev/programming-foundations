import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('score is exported', () => {
	assert.ok(
		'score' in solution,
		'🚨 Make sure you export "score" - add: export { score, ... }',
	)
})

await test('score should be 85', () => {
	assert.strictEqual(
		solution.score,
		85,
		'🚨 score should be 85 - check your variable assignment',
	)
})

await test('grade is exported', () => {
	assert.ok(
		'grade' in solution,
		'🚨 Make sure you export "grade" - add: export { score, grade, ... }',
	)
})

await test('grade should be "B" for score 85', () => {
	assert.strictEqual(
		solution.grade,
		'B',
		'🚨 grade should be "B" for score 85 - use if/else if statements to check score ranges (80-89 = B)',
	)
})

await test('passed is exported', () => {
	assert.ok(
		'passed' in solution,
		'🚨 Make sure you export "passed" - add: export { score, grade, passed }',
	)
})

await test('passed should be true for grade "B"', () => {
	assert.strictEqual(
		solution.passed,
		true,
		'🚨 passed should be true for grade "B" - check that grades A, B, and C are considered passing',
	)
})
