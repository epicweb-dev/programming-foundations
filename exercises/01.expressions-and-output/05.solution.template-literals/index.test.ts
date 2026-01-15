import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('answer is exported', () => {
	assert.ok(
		'answer' in solution,
		'🚨 Make sure you export "answer" - add: export { answer, ... }',
	)
})

await test('should have "The answer is 42"', () => {
	assert.strictEqual(
		solution.answer,
		'The answer is 42',
		'🚨 answer should be "The answer is 42" - use a template literal with ${40 + 2}',
	)
})

await test('greeting is exported', () => {
	assert.ok(
		'greeting' in solution,
		'🚨 Make sure you export "greeting" - add: export { answer, greeting, ... }',
	)
})

await test('should have Hello, TypeScript! greeting', () => {
	assert.ok(
		solution.greeting === 'Hello, TypeScript!' ||
			solution.greeting === 'Hello TypeScript',
		'🚨 greeting should include "Hello" and "TypeScript"',
	)
})

await test('math is exported', () => {
	assert.ok(
		'math' in solution,
		'🚨 Make sure you export "math" - add: export { answer, greeting, math }',
	)
})

await test('should have math result with 50', () => {
	assert.ok(
		solution.math.includes('50'),
		'🚨 math should include 50 (the result of 10 * 5) - use ${10 * 5} in a template literal',
	)
})
