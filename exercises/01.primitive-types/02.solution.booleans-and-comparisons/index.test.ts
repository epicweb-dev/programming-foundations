import { testStep, expect } from '@epic-web/workshop-utils/test'
import { isAvailable, isOnSale, hasDiscount, canPurchase } from './index.ts'

await testStep('isAvailable should be true', async () => {
	expect(isAvailable).toBe(true)
	expect(typeof isAvailable).toBe('boolean')
})

await testStep('isOnSale should be false', async () => {
	expect(isOnSale).toBe(false)
	expect(typeof isOnSale).toBe('boolean')
})

await testStep('hasDiscount should be true (price < 50)', async () => {
	expect(hasDiscount).toBe(true)
	expect(typeof hasDiscount).toBe('boolean')
})

await testStep('canPurchase should be true (isAvailable && stockCount > 0)', async () => {
	expect(canPurchase).toBe(true)
	expect(typeof canPurchase).toBe('boolean')
})
