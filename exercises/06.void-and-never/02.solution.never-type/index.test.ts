import assert from 'node:assert/strict'
import { test } from 'node:test'
import { throwError, assertNonNull, getStatusMessage } from './index.ts'

await test('throwError should throw an error', () => {
	assert.throws(
		() => throwError('Test error'),
		{ message: 'Test error' },
		'🚨 throwError should throw an error with the provided message - use throw new Error()',
	)
})

await test('assertNonNull should return value when not null', () => {
	const value = assertNonNull('Alice', 'Name is required')
	assert.strictEqual(
		value,
		'Alice',
		"🚨 assertNonNull should return the value when it's not null - check if value is null, if not return it",
	)
})

await test('assertNonNull should throw when value is null', () => {
	assert.throws(
		() => assertNonNull(null, 'Name is required'),
		{ message: 'Name is required' },
		'🚨 assertNonNull should throw the error message when value is null - check if value is null and throw if so',
	)
})

await test('getStatusMessage should return correct message for "pending"', () => {
	assert.strictEqual(
		getStatusMessage('pending'),
		'Loading...',
		'🚨 getStatusMessage("pending") should return "Loading..." - use a switch statement or if/else to handle different status values',
	)
})

await test('getStatusMessage should return correct message for "success"', () => {
	assert.strictEqual(
		getStatusMessage('success'),
		'Completed successfully!',
		'🚨 getStatusMessage("success") should return "Completed successfully!" - use a switch statement or if/else to handle different status values',
	)
})

await test('getStatusMessage should return correct message for "error"', () => {
	assert.strictEqual(
		getStatusMessage('error'),
		'An error occurred.',
		'🚨 getStatusMessage("error") should return "An error occurred." - use a switch statement or if/else to handle different status values',
	)
})
