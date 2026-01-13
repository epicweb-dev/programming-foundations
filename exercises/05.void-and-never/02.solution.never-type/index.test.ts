import { testStep, expect } from '@epic-web/workshop-utils/test'
import { throwError, assertNonNull, getStatusMessage } from './index.ts'

await testStep('throwError should throw an error', async () => {
	expect(() => throwError('Test error')).toThrow('Test error')
})

await testStep('assertNonNull should return value when not null', async () => {
	const value = assertNonNull('Alice', 'Name is required')
	expect(value).toBe('Alice')
})

await testStep('assertNonNull should throw when value is null', async () => {
	expect(() => assertNonNull(null, 'Name is required')).toThrow('Name is required')
})

await testStep('getStatusMessage should return correct message for "pending"', async () => {
	expect(getStatusMessage('pending')).toBe('Loading...')
})

await testStep('getStatusMessage should return correct message for "success"', async () => {
	expect(getStatusMessage('success')).toBe('Completed successfully!')
})

await testStep('getStatusMessage should return correct message for "error"', async () => {
	expect(getStatusMessage('error')).toBe('An error occurred.')
})
