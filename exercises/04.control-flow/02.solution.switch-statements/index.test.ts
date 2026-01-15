import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { grade, description } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

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
