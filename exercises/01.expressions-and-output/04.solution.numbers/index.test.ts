import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('addResult is exported', () => {
	assert.ok(
		'addResult' in solution,
		'🚨 Make sure you export "addResult" - add: export { addResult, ... }',
	)
})

await test('addResult should be 42', () => {
	assert.strictEqual(
		solution.addResult,
		42,
		'🚨 addResult should be 42 (the result of 25 + 17)',
	)
})

await test('multiplyResult is exported', () => {
	assert.ok(
		'multiplyResult' in solution,
		'🚨 Make sure you export "multiplyResult" - add: export { ..., multiplyResult, ... }',
	)
})

await test('multiplyResult should be 48', () => {
	assert.strictEqual(
		solution.multiplyResult,
		48,
		'🚨 multiplyResult should be 48 (the result of 8 * 6)',
	)
})

await test('divideResult is exported', () => {
	assert.ok(
		'divideResult' in solution,
		'🚨 Make sure you export "divideResult" - add: export { ..., divideResult, ... }',
	)
})

await test('divideResult should be 25', () => {
	assert.strictEqual(
		solution.divideResult,
		25,
		'🚨 divideResult should be 25 (the result of 100 / 4)',
	)
})

await test('groupedResult is exported', () => {
	assert.ok(
		'groupedResult' in solution,
		'🚨 Make sure you export "groupedResult" - add: export { ..., groupedResult }',
	)
})

await test('groupedResult should be 30', () => {
	assert.strictEqual(
		solution.groupedResult,
		30,
		'🚨 groupedResult should be 30 (the result of (10 + 5) * 2)',
	)
})
