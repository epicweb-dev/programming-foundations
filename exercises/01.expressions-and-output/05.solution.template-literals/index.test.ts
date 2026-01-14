import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

await test('should print "The answer is 42"', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('The answer is 42'),
		'🚨 Output should include "The answer is 42" - use a template literal with ${40 + 2}',
	)
})

await test('should print Hello, TypeScript!', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('Hello, TypeScript!') ||
			output.includes('Hello TypeScript'),
		'🚨 Output should include a greeting with TypeScript',
	)
})

await test('should print a math result with 50', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('50'),
		'🚨 Output should include 50 (the result of 10 * 5)',
	)
})
