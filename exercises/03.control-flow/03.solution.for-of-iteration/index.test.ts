import { testStep, expect } from '@epic-web/workshop-utils/test'
import { prices, total, highestPrice, average } from './index.ts'

await testStep('total should be sum of all prices', async () => {
	// 29.99 + 9.99 + 49.99 + 4.99 + 19.99 = 114.95
	expect(total).toBeCloseTo(114.95, 2)
})

await testStep('highestPrice should be 49.99', async () => {
	expect(highestPrice).toBeCloseTo(49.99, 2)
})

await testStep('average should be calculated correctly', async () => {
	// average = total / prices.length = 114.95 / 5 = 22.99
	expect(average).toBeCloseTo(22.99, 2)
})
