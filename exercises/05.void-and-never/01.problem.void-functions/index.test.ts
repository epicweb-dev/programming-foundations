import assert from 'node:assert/strict'
import { test } from 'node:test'
import { logInfo, logError, logWithTimestamp } from './index.ts'

await test('logInfo should be callable and return void', () => {
	const result = logInfo('test message')
	assert.strictEqual(
		result,
		undefined,
		"🚨 logInfo should return undefined (void) - functions that don't return a value return undefined",
	)
})

await test('logError should be callable and return void', () => {
	const result = logError('test error')
	assert.strictEqual(
		result,
		undefined,
		"🚨 logError should return undefined (void) - functions that don't return a value return undefined",
	)
})

await test('logWithTimestamp should be callable and return void', () => {
	const result = logWithTimestamp('test message')
	assert.strictEqual(
		result,
		undefined,
		"🚨 logWithTimestamp should return undefined (void) - functions that don't return a value return undefined",
	)
})
