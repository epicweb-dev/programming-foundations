import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { addResult, multiplyResult, divideResult, groupedResult } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('should print correct arithmetic results', () => {
	assert.ok(
		addResult === 42,
		'🚨 Output should include 42 (the result of 25 + 17)',
	)
	assert.ok(
		multiplyResult === 48,
		'🚨 Output should include 48 (the result of 8 * 6)',
	)
	assert.ok(
		divideResult === 25,
		'🚨 Output should include 25 (the result of 100 / 4)',
	)
	assert.ok(
		groupedResult === 30,
		'🚨 Output should include 30 (the result of (10 + 5) * 2)',
	)
})

await test('should print at least four lines', () => {
	const lines = output.trim().split('\n').filter(Boolean)
	assert.ok(
		lines.length >= 4,
		'🚨 Output should have at least 4 lines - make sure you logged all four calculations',
	)
})
