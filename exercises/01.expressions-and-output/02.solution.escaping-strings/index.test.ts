import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

await test('should print string with apostrophe', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes("It's working!"),
		'🚨 Output should include "It\'s working!" - make sure you escaped the apostrophe',
	)
})

await test('should print string with quotes', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('She said "Hi"'),
		'🚨 Output should include: She said "Hi" - make sure you escaped the double quotes',
	)
})

await test('should print Hello and World on separate lines', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('Hello\nWorld'),
		'🚨 Output should include "Hello" and "World" on separate lines - use \\n in a single string',
	)
})

await test('should print tab-separated values', () => {
	const output = execSync('node index.ts', { encoding: 'utf8' })
	assert.ok(
		output.includes('\t'),
		'🚨 Output should include tab characters - make sure you used \\t for tabs',
	)
})
