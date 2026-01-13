import { testStep, expect } from '@epic-web/workshop-utils/test'
import { TAX_RATE, cartTotal, finalTotal } from './index.ts'

await testStep('TAX_RATE should be 0.08', async () => {
	expect(TAX_RATE).toBe(0.08)
})

await testStep('cartTotal should be calculated correctly', async () => {
	// cartTotal = bookPrice + coffeePrice = 15.99 + 4.5 = 20.49
	expect(cartTotal).toBe(20.49)
})

await testStep('finalTotal should include tax', async () => {
	// finalTotal = cartTotal + cartTotal * TAX_RATE = 20.49 + 20.49 * 0.08 = 22.1292
	expect(finalTotal).toBeCloseTo(22.1292, 4)
})
