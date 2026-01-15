import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { test } from 'node:test'

function getOutput() {
	const result = spawnSync('npm', ['start', '--silent'], { encoding: 'utf8' })

	if (result.error) {
		throw result.error
	}

	assert.strictEqual(
		result.status,
		0,
		result.stderr || '🚨 Running the program failed',
	)

	return result.stdout.replace(/\r\n/g, '\n')
}

const output = getOutput()

await test('should print "The answer is 42"', () => {
	assert.ok(
		output.includes('The answer is 42'),
		'🚨 Output should include "The answer is 42" - use a template literal with ${40 + 2}',
	)
})

await test('should print Hello, TypeScript! greeting', () => {
	assert.ok(
		output.toLowerCase().includes('hello') &&
			output.toLowerCase().includes('typescript'),
		'🚨 Output should include "Hello" and "TypeScript"',
	)
})

await test('should print math result with 50', () => {
	assert.ok(
		output.includes('50'),
		'🚨 Output should include 50 (the result of 10 * 5) - use ${10 * 5} in a template literal',
	)
})
