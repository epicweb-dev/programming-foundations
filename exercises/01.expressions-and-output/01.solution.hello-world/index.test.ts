import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

await test('should print Hello, World!', () => {
	assert.ok(
		execSync('npm start --silent', { encoding: 'utf8' }).includes(
			'Hello, World!',
		),
		'🚨 Output should include "Hello, World!" - make sure you used console.log() with that exact string',
	)
})

await test('should print at least two lines', () => {
	const output = execSync('npm start --silent', { encoding: 'utf8' })
	const lines = output.trim().split('\n').filter(Boolean)
	assert.ok(
		lines.length >= 2,
		'🚨 Output should have at least 2 lines - make sure you logged both Hello, World! and your name',
	)
})
