import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

await test('should print correct arithmetic results', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })

	assert.ok(
		output.includes('42'),
		'🚨 Output should include 42 (the result of 25 + 17)',
	)
	assert.ok(
		output.includes('48'),
		'🚨 Output should include 48 (the result of 8 * 6)',
	)
	assert.ok(
		output.includes('25'),
		'🚨 Output should include 25 (the result of 100 / 4)',
	)
	assert.ok(
		output.includes('30'),
		'🚨 Output should include 30 (the result of (10 + 5) * 2)',
	)
})

await test('should print at least four lines', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	const lines = output.trim().split('\n').filter(Boolean)
	assert.ok(
		lines.length >= 4,
		'🚨 Output should have at least 4 lines - make sure you logged all four calculations',
	)
})
