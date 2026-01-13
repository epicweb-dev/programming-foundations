import { testStep, expect } from '@epic-web/workshop-utils/test'
import { price, productName, quantity, description } from './index.ts'

await testStep('price should be defined correctly', async () => {
	expect(price).toBe(29.99)
	expect(typeof price).toBe('number')
})

await testStep('productName should be defined correctly', async () => {
	expect(productName).toBe('TypeScript Guide')
	expect(typeof productName).toBe('string')
})

await testStep('quantity should be defined correctly', async () => {
	expect(quantity).toBe(100)
	expect(typeof quantity).toBe('number')
})

await testStep('description should be defined correctly', async () => {
	expect(description).toBe('Product: TypeScript Guide | Price: $29.99 | In Stock: 100')
	expect(typeof description).toBe('string')
})
