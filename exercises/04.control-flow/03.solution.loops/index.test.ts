import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

await test('output should match the star staircase', () => {
	const expected = '*\n**\n***\n****\n*****\n'
	const output = execSync('npm start --silent', { encoding: 'utf8' })
	const jsonLine = output
		.split('\n')
		.find((line) => line.startsWith('Results:'))
	assert.ok(jsonLine, '🚨 Missing "Results:" output line')
	const { output: actual } = JSON.parse(jsonLine.replace('Results:', '').trim())
	assert.strictEqual(
		actual,
		expected,
		'🚨 output should be a 5-line staircase of stars',
	)
})
