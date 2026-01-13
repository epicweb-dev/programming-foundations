import { testStep, expect } from '@epic-web/workshop-utils/test'
import { logInfo, logError, logWithTimestamp } from './index.ts'

await testStep('logInfo should be callable and return void', async () => {
	const result = logInfo('test message')
	expect(result).toBeUndefined()
})

await testStep('logError should be callable and return void', async () => {
	const result = logError('test error')
	expect(result).toBeUndefined()
})

await testStep('logWithTimestamp should be callable and return void', async () => {
	const result = logWithTimestamp('test message')
	expect(result).toBeUndefined()
})
