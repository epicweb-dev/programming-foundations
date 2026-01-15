import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { score, grade, passed } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

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
