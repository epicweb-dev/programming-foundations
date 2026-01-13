import { testStep, expect } from '@epic-web/workshop-utils/test'
import { calculateTax, formatPrice, applyDiscount } from './index.ts'

await testStep('calculateTax should calculate tax correctly', async () => {
	expect(
		calculateTax(100, 0.08),
		'🚨 calculateTax(100, 0.08) should return 8 - multiply the amount by the tax rate',
	).toBe(8)
	expect(
		calculateTax(50, 0.1),
		'🚨 calculateTax(50, 0.1) should return 5 - multiply the amount by the tax rate',
	).toBe(5)
})

await testStep('formatPrice should format cents as dollars', async () => {
	expect(
		formatPrice(1999),
		'🚨 formatPrice(1999) should return "$19.99" - divide by 100 and format with dollar sign and 2 decimals',
	).toBe('$19.99')
	expect(
		formatPrice(100),
		'🚨 formatPrice(100) should return "$1.00" - divide by 100 and format with dollar sign and 2 decimals',
	).toBe('$1.00')
	expect(
		formatPrice(50),
		'🚨 formatPrice(50) should return "$0.50" - divide by 100 and format with dollar sign and 2 decimals',
	).toBe('$0.50')
})

await testStep('applyDiscount should apply discount percentage', async () => {
	expect(
		applyDiscount(100, 20),
		'🚨 applyDiscount(100, 20) should return 80 - subtract the discount percentage from the price',
	).toBe(80)
	expect(
		applyDiscount(50, 10),
		'🚨 applyDiscount(50, 10) should return 45 - subtract the discount percentage from the price',
	).toBe(45)
	expect(
		applyDiscount(200, 25),
		'🚨 applyDiscount(200, 25) should return 150 - subtract the discount percentage from the price',
	).toBe(150)
})
