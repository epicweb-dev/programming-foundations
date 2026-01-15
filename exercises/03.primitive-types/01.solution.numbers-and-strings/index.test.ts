import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('price is exported', () => {
	assert.ok(
		'price' in solution,
		'🚨 Make sure you export "price" - add: export { price, ... }',
	)
})

await test('price should be defined correctly', () => {
	assert.strictEqual(
		solution.price,
		29.99,
		'🚨 price should be set to 29.99 - check that you declared it as a number',
	)
	assert.strictEqual(
		typeof solution.price,
		'number',
		'🚨 price should be a number type - make sure you used a number literal, not a string',
	)
})

await test('productName is exported', () => {
	assert.ok(
		'productName' in solution,
		'🚨 Make sure you export "productName" - add: export { price, productName, ... }',
	)
})

await test('productName should be defined correctly', () => {
	assert.strictEqual(
		solution.productName,
		'TypeScript Guide',
		'🚨 productName should be set to "TypeScript Guide" - check that you used the exact string',
	)
	assert.strictEqual(
		typeof solution.productName,
		'string',
		'🚨 productName should be a string type - make sure you used quotes around the value',
	)
})

await test('quantity is exported', () => {
	assert.ok(
		'quantity' in solution,
		'🚨 Make sure you export "quantity" - add: export { price, productName, quantity, ... }',
	)
})

await test('quantity should be defined correctly', () => {
	assert.strictEqual(
		solution.quantity,
		100,
		'🚨 quantity should be set to 100 - check that you declared it as a number',
	)
	assert.strictEqual(
		typeof solution.quantity,
		'number',
		'🚨 quantity should be a number type - make sure you used a number literal, not a string',
	)
})

await test('description is exported', () => {
	assert.ok(
		'description' in solution,
		'🚨 Make sure you export "description" - add: export { price, productName, quantity, description }',
	)
})

await test('description should be defined correctly', () => {
	assert.strictEqual(
		solution.description,
		'Product: TypeScript Guide | Price: $29.99 | In Stock: 100',
		'🚨 description should combine productName, price, and quantity into a formatted string - use template literals',
	)
	assert.strictEqual(
		typeof solution.description,
		'string',
		'🚨 description should be a string type - make sure you created a string value',
	)
})
