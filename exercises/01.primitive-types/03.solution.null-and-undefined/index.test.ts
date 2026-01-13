import { testStep, expect } from '@epic-web/workshop-utils/test'
import { discountCode, lastPurchaseDate } from './index.ts'

await testStep('discountCode should be undefined', async () => {
	expect(discountCode).toBeUndefined()
})

await testStep('lastPurchaseDate should be null', async () => {
	expect(lastPurchaseDate).toBeNull()
})
