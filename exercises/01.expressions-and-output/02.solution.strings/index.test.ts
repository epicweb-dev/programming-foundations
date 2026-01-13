import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

await test('should print Hello TypeScript', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('Hello TypeScript'),
		'🚨 Output should include "Hello TypeScript" - concatenate "Hello" + " " + "TypeScript"',
	)
})

await test('should print at least three lines', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	const lines = output.trim().split('\n').filter(Boolean)
	assert.ok(
		lines.length >= 3,
		'🚨 Output should have at least 3 lines - make sure you logged all three string expressions',
	)
})
