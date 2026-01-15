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

await test('should print apostrophe string', () => {
	assert.ok(
		output.includes("It's working!"),
		'🚨 Output should include "It\'s working!" - make sure you escaped the apostrophe with \\\'',
	)
})

await test('should print string with quotes', () => {
	assert.ok(
		output.includes('She said "Hi"'),
		'🚨 Output should include: She said "Hi" - make sure you escaped the double quotes with \\"',
	)
})

await test('should print Hello and World on separate lines', () => {
	assert.ok(
		output.includes('Hello\nWorld'),
		'🚨 Output should include "Hello\\nWorld" - use \\n in a single string',
	)
})

await test('should print tab-separated values', () => {
	assert.ok(
		output.includes('Name:\tAge:\tCity:'),
		'🚨 Output should include tab characters - make sure you used \\t for tabs',
	)
})
