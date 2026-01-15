import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('grade is exported', () => {
	assert.ok(
		'grade' in solution,
		'🚨 Make sure you export "grade" - add: export { grade, ... }',
	)
})

await test('grade should be "B"', () => {
	assert.strictEqual(
		solution.grade,
		'B',
		'🚨 grade should be "B" - check your variable assignment',
	)
})

await test('description is exported', () => {
	assert.ok(
		'description' in solution,
		'🚨 Make sure you export "description" - add: export { grade, description }',
	)
})

await test('description should be "Good" for grade "B"', () => {
	assert.strictEqual(
		solution.description,
		'Good',
		'🚨 description should be "Good" for grade "B" - use a switch statement to match grade to description',
	)
})
