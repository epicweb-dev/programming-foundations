import { testStep, expect } from '@epic-web/workshop-utils/test'
import { discountCode, lastPurchaseDate } from './index.ts'

await testStep('discountCode should be undefined', async () => {
	expect(
		discountCode,
		'🚨 discountCode should be undefined - declare the variable without assigning a value, or explicitly set it to undefined',
	).toBeUndefined()
})

await testStep('lastPurchaseDate should be null', async () => {
	expect(
		lastPurchaseDate,
		'🚨 lastPurchaseDate should be null - explicitly set it to the null value',
	).toBeNull()
})
