import { testStep, expect } from '@epic-web/workshop-utils/test'
import { TAX_RATE, cartTotal, finalTotal } from './index.ts'

await testStep('TAX_RATE should be 0.08', async () => {
	expect(TAX_RATE, '🚨 TAX_RATE should be 0.08 - use const for a value that never changes').toBe(0.08)
})

await testStep('cartTotal should be calculated correctly', async () => {
	// cartTotal = bookPrice + coffeePrice = 15.99 + 4.5 = 20.49
	expect(cartTotal, '🚨 cartTotal should be 20.49 - add bookPrice and coffeePrice together').toBeCloseTo(20.49, 2)
})

await testStep('finalTotal should include tax', async () => {
	// finalTotal = cartTotal + cartTotal * TAX_RATE = 20.49 + 20.49 * 0.08 = 22.1292
	expect(finalTotal, '🚨 finalTotal should be 22.1292 - add the tax (cartTotal * TAX_RATE) to cartTotal').toBeCloseTo(22.1292, 4)
})
