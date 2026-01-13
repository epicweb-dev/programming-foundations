import { testStep, expect } from '@epic-web/workshop-utils/test'
import { throwError, assertNonNull, getStatusMessage } from './index.ts'

await testStep('throwError should throw an error', async () => {
	expect(
		() => throwError('Test error'),
		'🚨 throwError should throw an error with the provided message - use throw new Error()',
	).toThrow('Test error')
})

await testStep('assertNonNull should return value when not null', async () => {
	const value = assertNonNull('Alice', 'Name is required')
	expect(
		value,
		"🚨 assertNonNull should return the value when it's not null - check if value is null, if not return it",
	).toBe('Alice')
})

await testStep('assertNonNull should throw when value is null', async () => {
	expect(
		() => assertNonNull(null, 'Name is required'),
		'🚨 assertNonNull should throw the error message when value is null - check if value is null and throw if so',
	).toThrow('Name is required')
})

await testStep(
	'getStatusMessage should return correct message for "pending"',
	async () => {
		expect(
			getStatusMessage('pending'),
			'🚨 getStatusMessage("pending") should return "Loading..." - use a switch statement or if/else to handle different status values',
		).toBe('Loading...')
	},
)

await testStep(
	'getStatusMessage should return correct message for "success"',
	async () => {
		expect(
			getStatusMessage('success'),
			'🚨 getStatusMessage("success") should return "Completed successfully!" - use a switch statement or if/else to handle different status values',
		).toBe('Completed successfully!')
	},
)

await testStep(
	'getStatusMessage should return correct message for "error"',
	async () => {
		expect(
			getStatusMessage('error'),
			'🚨 getStatusMessage("error") should return "An error occurred." - use a switch statement or if/else to handle different status values',
		).toBe('An error occurred.')
	},
)
