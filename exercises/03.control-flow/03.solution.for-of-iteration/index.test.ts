import { testStep, expect } from '@epic-web/workshop-utils/test'
import { prices, total, highestPrice, average } from './index.ts'

await testStep('total should be sum of all prices', async () => {
	// 29.99 + 9.99 + 49.99 + 4.99 + 19.99 = 114.95
	expect(total, '🚨 total should be 114.95 - use a for...of loop to iterate and sum all prices').toBeCloseTo(114.95, 2)
})

await testStep('highestPrice should be 49.99', async () => {
	expect(highestPrice, '🚨 highestPrice should be 49.99 - use a for...of loop to find the maximum price').toBeCloseTo(49.99, 2)
})

await testStep('average should be calculated correctly', async () => {
	// average = total / prices.length = 114.95 / 5 = 22.99
	expect(average, '🚨 average should be 22.99 - divide the total by the number of prices').toBeCloseTo(22.99, 2)
})
