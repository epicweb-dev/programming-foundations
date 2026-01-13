import { testStep, expect } from '@epic-web/workshop-utils/test'
import { prices, total, expensiveItemCount } from './index.ts'

await testStep('total should be sum of all prices', async () => {
	// 29.99 + 9.99 + 49.99 + 4.99 + 19.99 = 114.95
	expect(total, '🚨 total should be 114.95 - use a loop to sum all prices in the array').toBeCloseTo(114.95, 2)
})

await testStep('expensiveItemCount should count items > $10', async () => {
	// Items > 10: 29.99, 49.99, 19.99 = 3 items
	expect(expensiveItemCount, '🚨 expensiveItemCount should be 3 - use a loop to count prices greater than 10').toBe(3)
})

await testStep('prices array should have 5 items', async () => {
	expect(prices.length, '🚨 prices array should have 5 items - check your array initialization').toBe(5)
})
