import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('multiply is exported', () => {
	assert.ok(
		'multiply' in solution,
		'🚨 Make sure you export "multiply" - add: export { multiply, ... }',
	)
})

await test('multiply should multiply two numbers', () => {
	assert.strictEqual(
		solution.multiply(4, 5),
		20,
		'🚨 multiply(4, 5) should return 20 - multiply the two parameters together',
	)
	assert.strictEqual(
		solution.multiply(3, 7),
		21,
		'🚨 multiply(3, 7) should return 21 - multiply the two parameters together',
	)
	assert.strictEqual(
		solution.multiply(-2, 4),
		-8,
		'🚨 multiply(-2, 4) should return -8 - multiply the two parameters together',
	)
})

await test('divide is exported', () => {
	assert.ok(
		'divide' in solution,
		'🚨 Make sure you export "divide" - add: export { multiply, divide, ... }',
	)
})

await test('divide should divide two numbers', () => {
	assert.strictEqual(
		solution.divide(10, 2),
		5,
		'🚨 divide(10, 2) should return 5 - divide the first parameter by the second',
	)
	assert.strictEqual(
		solution.divide(15, 3),
		5,
		'🚨 divide(15, 3) should return 5 - divide the first parameter by the second',
	)
	assert.ok(
		Math.abs(solution.divide(7, 2) - 3.5) < 0.1,
		'🚨 divide(7, 2) should return 3.5 - divide the first parameter by the second',
	)
})

await test('divide should throw error when dividing by zero', () => {
	assert.throws(
		() => solution.divide(10, 0),
		{ message: 'Cannot divide by zero' },
		'🚨 divide(10, 0) should throw "Cannot divide by zero" - check if the divisor is 0 and throw an error',
	)
})

await test('isEven is exported', () => {
	assert.ok(
		'isEven' in solution,
		'🚨 Make sure you export "isEven" - add: export { multiply, divide, isEven }',
	)
})

await test('isEven should return true for even numbers', () => {
	assert.strictEqual(
		solution.isEven(4),
		true,
		'🚨 isEven(4) should return true - check if the number modulo 2 equals 0',
	)
	assert.strictEqual(
		solution.isEven(2),
		true,
		'🚨 isEven(2) should return true - check if the number modulo 2 equals 0',
	)
	assert.strictEqual(
		solution.isEven(0),
		true,
		'🚨 isEven(0) should return true - check if the number modulo 2 equals 0',
	)
})

await test('isEven should return false for odd numbers', () => {
	assert.strictEqual(
		solution.isEven(7),
		false,
		'🚨 isEven(7) should return false - check if the number modulo 2 does not equal 0',
	)
	assert.strictEqual(
		solution.isEven(3),
		false,
		'🚨 isEven(3) should return false - check if the number modulo 2 does not equal 0',
	)
	assert.strictEqual(
		solution.isEven(1),
		false,
		'🚨 isEven(1) should return false - check if the number modulo 2 does not equal 0',
	)
})
