import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
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

await test('should print Hello TypeScript', () => {
	assert.ok(
		output.includes('Hello TypeScript'),
		'🚨 Output should include "Hello TypeScript" - concatenate "Hello" + " " + "TypeScript"',
	)
})

await test('should print a full name with a space', () => {
	assert.ok(
		output.includes('Kody Koala'),
		'🚨 Output should include a full name with a space between first and last name',
	)
})

await test('should print the concatenated sentence', () => {
	assert.ok(
		output.includes('I am learning to code'),
		'🚨 Output should include "I am learning to code" - concatenate multiple strings',
	)
})

await test('should use string concatenation', () => {
	const source = readFileSync('index.ts', 'utf8')
	const codeLines = source
		.split('\n')
		.filter((line) => !line.trim().startsWith('//'))
		.join('\n')
	const concatenationCount = (codeLines.match(/['"][^'"]*['"]\s*\+/g) || [])
		.length
	assert.ok(
		concatenationCount >= 3,
		'🚨 You should use the + operator to concatenate strings at least 3 times',
	)
})
