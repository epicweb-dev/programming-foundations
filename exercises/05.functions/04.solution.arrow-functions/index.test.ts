import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	double,
	greet,
	calculateTotal,
	isEven,
	processNumbers,
} from './index.ts'

await test('double should be an arrow function', () => {
	assert.ok(
		double.toString().includes('=>'),
		'🚨 double should be an arrow function - use const double = (n: number): number => ...',
	)
	assert.strictEqual(double(5), 10, '🚨 double(5) should return 10')
	assert.strictEqual(double(0), 0, '🚨 double(0) should return 0')
	assert.strictEqual(double(-3), -6, '🚨 double(-3) should return -6')
})

await test('greet should be an arrow function', () => {
	assert.ok(
		greet.toString().includes('=>'),
		'🚨 greet should be an arrow function - use const greet = (name: string): string => ...',
	)
	assert.strictEqual(
		greet('Alice'),
		'Hello, Alice!',
		'🚨 greet("Alice") should return "Hello, Alice!"',
	)
	assert.strictEqual(
		greet('Bob'),
		'Hello, Bob!',
		'🚨 greet("Bob") should return "Hello, Bob!"',
	)
})

await test('calculateTotal should be an arrow function', () => {
	assert.ok(
		calculateTotal.toString().includes('=>'),
		'🚨 calculateTotal should be an arrow function',
	)
	assert.strictEqual(
		calculateTotal([10, 20, 30], 0.1),
		66,
		'🚨 calculateTotal([10, 20, 30], 0.1) should return 66 - sum prices and add tax',
	)
	assert.strictEqual(
		calculateTotal([100], 0.05),
		105,
		'🚨 calculateTotal([100], 0.05) should return 105',
	)
})

await test('isEven should be an arrow function', () => {
	assert.ok(
		isEven.toString().includes('=>'),
		'🚨 isEven should be an arrow function with implicit return',
	)
	assert.strictEqual(isEven(4), true, '🚨 isEven(4) should return true')
	assert.strictEqual(isEven(7), false, '🚨 isEven(7) should return false')
	assert.strictEqual(isEven(0), true, '🚨 isEven(0) should return true')
})

await test('processNumbers should use arrow function callbacks', () => {
	const result = processNumbers([1, 2, 3, 4, 5])

	assert.strictEqual(
		JSON.stringify(result.doubled),
		JSON.stringify([2, 4, 6, 8, 10]),
		'🚨 doubled should be [2, 4, 6, 8, 10] - use map with arrow function',
	)

	assert.strictEqual(
		JSON.stringify(result.evens),
		JSON.stringify([2, 4]),
		'🚨 evens should be [2, 4] - use filter with arrow function',
	)

	assert.strictEqual(
		result.sum,
		15,
		'🚨 sum should be 15 - use reduce with arrow function',
	)
})
