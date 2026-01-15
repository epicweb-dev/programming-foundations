import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('greeting is exported', () => {
	assert.ok(
		'greeting' in solution,
		'🚨 Make sure you export "greeting" - add: export { greeting, ... }',
	)
})

await test('should have Hello TypeScript', () => {
	assert.strictEqual(
		solution.greeting,
		'Hello TypeScript',
		'🚨 greeting should be "Hello TypeScript" - concatenate "Hello" + " " + "TypeScript"',
	)
})

await test('fullName is exported', () => {
	assert.ok(
		'fullName' in solution,
		'🚨 Make sure you export "fullName" - add: export { greeting, fullName, ... }',
	)
})

await test('fullName should have a space', () => {
	assert.ok(
		solution.fullName.includes(' '),
		'🚨 fullName should contain a space between first and last name',
	)
})

await test('sentence is exported', () => {
	assert.ok(
		'sentence' in solution,
		'🚨 Make sure you export "sentence" - add: export { greeting, fullName, sentence }',
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
