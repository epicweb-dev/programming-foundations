import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('logInfo is exported', () => {
	assert.ok(
		'logInfo' in solution,
		'🚨 Make sure you export "logInfo" - add: export { logInfo, ... }',
	)
})

await test('logInfo should be callable and return void', () => {
	const result = solution.logInfo('test message')
	assert.strictEqual(
		result,
		undefined,
		"🚨 logInfo should return undefined (void) - functions that don't return a value return undefined",
	)
})

await test('logError is exported', () => {
	assert.ok(
		'logError' in solution,
		'🚨 Make sure you export "logError" - add: export { logInfo, logError, ... }',
	)
})

await test('logError should be callable and return void', () => {
	const result = solution.logError('test error')
	assert.strictEqual(
		result,
		undefined,
		"🚨 logError should return undefined (void) - functions that don't return a value return undefined",
	)
})

await test('logWithTimestamp is exported', () => {
	assert.ok(
		'logWithTimestamp' in solution,
		'🚨 Make sure you export "logWithTimestamp" - add: export { logInfo, logError, logWithTimestamp }',
	)
})

await test('logWithTimestamp should be callable and return void', () => {
	const result = solution.logWithTimestamp('test message')
	assert.strictEqual(
		result,
		undefined,
		"🚨 logWithTimestamp should return undefined (void) - functions that don't return a value return undefined",
	)
})
