import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
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
