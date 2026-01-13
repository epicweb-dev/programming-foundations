import assert from 'node:assert/strict'
import { test } from 'node:test'
import { price, productName, quantity, description } from './index.ts'

await test('price should be defined correctly', () => {
	assert.strictEqual(
		price,
		29.99,
		'🚨 price should be set to 29.99 - check that you declared it as a number',
	)
	assert.strictEqual(
		typeof price,
		'number',
		'🚨 price should be a number type - make sure you used a number literal, not a string',
	)
})

await test('productName should be defined correctly', () => {
	assert.strictEqual(
		productName,
		'TypeScript Guide',
		'🚨 productName should be set to "TypeScript Guide" - check that you used the exact string',
	)
	assert.strictEqual(
		typeof productName,
		'string',
		'🚨 productName should be a string type - make sure you used quotes around the value',
	)
})

await test('quantity should be defined correctly', () => {
	assert.strictEqual(
		quantity,
		100,
		'🚨 quantity should be set to 100 - check that you declared it as a number',
	)
	assert.strictEqual(
		typeof quantity,
		'number',
		'🚨 quantity should be a number type - make sure you used a number literal, not a string',
	)
})

await test('description should be defined correctly', () => {
	assert.strictEqual(
		description,
		'Product: TypeScript Guide | Price: $29.99 | In Stock: 100',
		'🚨 description should combine productName, price, and quantity into a formatted string - use template literals or string concatenation',
	)
	assert.strictEqual(
		typeof description,
		'string',
		'🚨 description should be a string type - make sure you created a string value',
	)
})
