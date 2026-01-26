import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('double is exported', () => {
	assert.ok(
		'double' in solution,
		'🚨 Make sure you export "double" - add: export { double, ... }',
	)
})

await test('double should be an arrow function', () => {
	assert.ok(
		solution.double.toString().includes('=>'),
		'🚨 double should be an arrow function - use const double = (n: number) => ...',
	)
	assert.strictEqual(solution.double(5), 10, '🚨 double(5) should return 10')
	assert.strictEqual(solution.double(0), 0, '🚨 double(0) should return 0')
	assert.strictEqual(solution.double(-3), -6, '🚨 double(-3) should return -6')
})

await test('greet is exported', () => {
	assert.ok(
		'greet' in solution,
		'🚨 Make sure you export "greet" - add: export { double, greet, ... }',
	)
})

await test('greet should be an arrow function', () => {
	assert.ok(
		solution.greet.toString().includes('=>'),
		'🚨 greet should be an arrow function - use const greet = (name: string) => ...',
	)
	assert.strictEqual(
		solution.greet('Alice'),
		'Hello, Alice!',
		'🚨 greet("Alice") should return "Hello, Alice!"',
	)
	assert.strictEqual(
		solution.greet('Bob'),
		'Hello, Bob!',
		'🚨 greet("Bob") should return "Hello, Bob!"',
	)
})

await test('calculateTotal is exported', () => {
	assert.ok(
		'calculateTotal' in solution,
		'🚨 Make sure you export "calculateTotal" - add: export { ..., calculateTotal, ... }',
	)
})

await test('calculateTotal should be an arrow function', () => {
	assert.ok(
		solution.calculateTotal.toString().includes('=>'),
		'🚨 calculateTotal should be an arrow function',
	)
	assert.strictEqual(
		solution.calculateTotal(60, 0.1),
		66,
		'🚨 calculateTotal(60, 0.1) should return 66 - add tax to the subtotal',
	)
	assert.strictEqual(
		solution.calculateTotal(100, 0.05),
		105,
		'🚨 calculateTotal(100, 0.05) should return 105',
	)
})

await test('isEven is exported', () => {
	assert.ok(
		'isEven' in solution,
		'🚨 Make sure you export "isEven" - add: export { ..., isEven, ... }',
	)
})

await test('isEven should be an arrow function', () => {
	assert.ok(
		solution.isEven.toString().includes('=>'),
		'🚨 isEven should be an arrow function with implicit return',
	)
	assert.strictEqual(
		solution.isEven(4),
		true,
		'🚨 isEven(4) should return true',
	)
	assert.strictEqual(
		solution.isEven(7),
		false,
		'🚨 isEven(7) should return false',
	)
	assert.strictEqual(
		solution.isEven(0),
		true,
		'🚨 isEven(0) should return true',
	)
})

await test('applyToNumber is exported', () => {
	assert.ok(
		'applyToNumber' in solution,
		'🚨 Make sure you export "applyToNumber" - add: export { ..., applyToNumber, ... }',
	)
})

await test('triple and square are exported', () => {
	assert.ok(
		'triple' in solution,
		'🚨 Make sure you export "triple" - add: export { ..., triple, ... }',
	)
	assert.ok(
		'square' in solution,
		'🚨 Make sure you export "square" - add: export { ..., square }',
	)
})

await test('applyToNumber should use callbacks correctly', () => {
	assert.strictEqual(
		solution.applyToNumber(5, solution.triple),
		15,
		'🚨 applyToNumber(5, triple) should return 15',
	)
	assert.strictEqual(
		solution.applyToNumber(6, solution.square),
		36,
		'🚨 applyToNumber(6, square) should return 36',
	)
})
