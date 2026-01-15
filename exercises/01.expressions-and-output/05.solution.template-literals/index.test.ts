import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { answer, greeting, math } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('should print "The answer is 42"', () => {
	assert.ok(
		answer === 'The answer is 42',
		'🚨 Output should include "The answer is 42" - use a template literal with ${40 + 2}',
	)
})

await test('should print Hello, TypeScript!', () => {
	assert.ok(
		greeting === 'Hello, TypeScript!' || greeting === 'Hello TypeScript',
		'🚨 Output should include a greeting with TypeScript',
	)
})

await test('should print a math result with 50', () => {
	assert.ok(
		math.includes('50'),
		'🚨 Output should include 50 (the result of 10 * 5)',
	)
})
