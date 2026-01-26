import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('exhibitLabels is exported', () => {
	assert.ok(
		'exhibitLabels' in solution,
		'🚨 Make sure you export "exhibitLabels" - add: export { exhibitLabels }',
	)
})

await test('exhibitLabels should list exhibits 1 through 5', () => {
	const expected =
		'Exhibit 1\nExhibit 2\nExhibit 3\nExhibit 4\nExhibit 5\n'
	assert.strictEqual(
		solution.exhibitLabels,
		expected,
		'🚨 exhibitLabels should list Exhibit 1 through Exhibit 5 on separate lines',
	)
})
