import { testStep, expect } from '@epic-web/workshop-utils/test'
import { isAvailable, isOnSale, hasDiscount, canPurchase } from './index.ts'

await testStep('isAvailable should be true', async () => {
	expect(isAvailable, '🚨 isAvailable should be true - check your comparison or assignment').toBe(true)
	expect(typeof isAvailable, '🚨 isAvailable should be a boolean type - use true or false, not a string').toBe('boolean')
})

await testStep('isOnSale should be false', async () => {
	expect(isOnSale, '🚨 isOnSale should be false - check your comparison or assignment').toBe(false)
	expect(typeof isOnSale, '🚨 isOnSale should be a boolean type - use true or false, not a string').toBe('boolean')
})

await testStep('hasDiscount should be true (price < 50)', async () => {
	expect(hasDiscount, '🚨 hasDiscount should be true when price is less than 50 - check your comparison operator').toBe(true)
	expect(typeof hasDiscount, '🚨 hasDiscount should be a boolean type - use a comparison that returns true or false').toBe('boolean')
})

await testStep('canPurchase should be true (isAvailable && stockCount > 0)', async () => {
	expect(canPurchase, '🚨 canPurchase should be true when both isAvailable is true AND stockCount > 0 - use the && operator').toBe(true)
	expect(typeof canPurchase, '🚨 canPurchase should be a boolean type - use a logical expression that returns true or false').toBe('boolean')
})
