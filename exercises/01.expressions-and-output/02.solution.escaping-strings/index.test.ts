import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { apostrophe, quotes, newlines, tabs } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('should print string with apostrophe', () => {
	assert.ok(
		apostrophe === "It's working!",
		'🚨 Output should include "It\'s working!" - make sure you escaped the apostrophe',
	)
})

await test('should print string with quotes', () => {
	assert.ok(
		quotes === 'She said "Hi"',
		'🚨 Output should include: She said "Hi" - make sure you escaped the double quotes',
	)
})

await test('should print Hello and World on separate lines', () => {
	assert.ok(
		newlines === 'Hello\nWorld',
		'🚨 Output should include "Hello" and "World" on separate lines - use \\n in a single string',
	)
})

await test('should print tab-separated values', () => {
	assert.ok(
		tabs.includes('\t'),
		'🚨 Output should include tab characters - make sure you used \\t for tabs',
	)
})
