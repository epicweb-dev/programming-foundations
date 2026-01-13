import { testStep, expect } from '@epic-web/workshop-utils/test'
import { price, productName, quantity, description } from './index.ts'

await testStep('price should be defined correctly', async () => {
	expect(
		price,
		'🚨 price should be set to 29.99 - check that you declared it as a number',
	).toBe(29.99)
	expect(
		typeof price,
		'🚨 price should be a number type - make sure you used a number literal, not a string',
	).toBe('number')
})

await testStep('productName should be defined correctly', async () => {
	expect(
		productName,
		'🚨 productName should be set to "TypeScript Guide" - check that you used the exact string',
	).toBe('TypeScript Guide')
	expect(
		typeof productName,
		'🚨 productName should be a string type - make sure you used quotes around the value',
	).toBe('string')
})

await testStep('quantity should be defined correctly', async () => {
	expect(
		quantity,
		'🚨 quantity should be set to 100 - check that you declared it as a number',
	).toBe(100)
	expect(
		typeof quantity,
		'🚨 quantity should be a number type - make sure you used a number literal, not a string',
	).toBe('number')
})

await testStep('description should be defined correctly', async () => {
	expect(
		description,
		'🚨 description should combine productName, price, and quantity into a formatted string - use template literals or string concatenation',
	).toBe('Product: TypeScript Guide | Price: $29.99 | In Stock: 100')
	expect(
		typeof description,
		'🚨 description should be a string type - make sure you created a string value',
	).toBe('string')
})
