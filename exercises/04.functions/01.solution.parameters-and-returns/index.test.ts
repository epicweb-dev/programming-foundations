import { testStep, expect } from '@epic-web/workshop-utils/test'
import { calculateTax, formatPrice, applyDiscount } from './index.ts'

await testStep('calculateTax should calculate tax correctly', async () => {
	expect(calculateTax(100, 0.08)).toBe(8)
	expect(calculateTax(50, 0.1)).toBe(5)
})

await testStep('formatPrice should format cents as dollars', async () => {
	expect(formatPrice(1999)).toBe('$19.99')
	expect(formatPrice(100)).toBe('$1.00')
	expect(formatPrice(50)).toBe('$0.50')
})

await testStep('applyDiscount should apply discount percentage', async () => {
	expect(applyDiscount(100, 20)).toBe(80)
	expect(applyDiscount(50, 10)).toBe(45)
	expect(applyDiscount(200, 25)).toBe(150)
})
