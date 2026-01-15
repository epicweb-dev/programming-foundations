import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	double,
	greet,
	calculateTotal,
	isEven,
	applyToNumber,
	triple,
	square,
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
		calculateTotal(60, 0.1),
		66,
		'🚨 calculateTotal(60, 0.1) should return 66 - add tax to the subtotal',
	)
	assert.strictEqual(
		calculateTotal(100, 0.05),
		105,
		'🚨 calculateTotal(100, 0.05) should return 105',
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

await test('applyToNumber should use a callback', () => {
	assert.strictEqual(
		applyToNumber(5, triple),
		15,
		'🚨 applyToNumber(5, triple) should return 15',
	)
	assert.strictEqual(
		applyToNumber(6, square),
		36,
		'🚨 applyToNumber(6, square) should return 36',
	)
})
