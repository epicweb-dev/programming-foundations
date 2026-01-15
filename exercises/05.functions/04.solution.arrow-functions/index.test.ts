import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { double, greet, calculateTotal, isEven, applyToNumber } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('double should be an arrow function', () => {
	assert.ok(
		double.source.includes('=>'),
		'🚨 double should be an arrow function - use const double = (n: number): number => ...',
	)
	assert.strictEqual(double.outputs[0], 10, '🚨 double(5) should return 10')
	assert.strictEqual(double.outputs[1], 0, '🚨 double(0) should return 0')
	assert.strictEqual(double.outputs[2], -6, '🚨 double(-3) should return -6')
})

await test('greet should be an arrow function', () => {
	assert.ok(
		greet.source.includes('=>'),
		'🚨 greet should be an arrow function - use const greet = (name: string): string => ...',
	)
	assert.strictEqual(
		greet.outputs[0],
		'Hello, Alice!',
		'🚨 greet("Alice") should return "Hello, Alice!"',
	)
	assert.strictEqual(
		greet.outputs[1],
		'Hello, Bob!',
		'🚨 greet("Bob") should return "Hello, Bob!"',
	)
})

await test('calculateTotal should be an arrow function', () => {
	assert.ok(
		calculateTotal.source.includes('=>'),
		'🚨 calculateTotal should be an arrow function',
	)
	assert.strictEqual(
		calculateTotal.outputs[0],
		66,
		'🚨 calculateTotal(60, 0.1) should return 66 - add tax to the subtotal',
	)
	assert.strictEqual(
		calculateTotal.outputs[1],
		105,
		'🚨 calculateTotal(100, 0.05) should return 105',
	)
})

await test('isEven should be an arrow function', () => {
	assert.ok(
		isEven.source.includes('=>'),
		'🚨 isEven should be an arrow function with implicit return',
	)
	assert.strictEqual(isEven.outputs[0], true, '🚨 isEven(4) should return true')
	assert.strictEqual(
		isEven.outputs[1],
		false,
		'🚨 isEven(7) should return false',
	)
	assert.strictEqual(isEven.outputs[2], true, '🚨 isEven(0) should return true')
})

await test('applyToNumber should use a callback', () => {
	assert.strictEqual(
		applyToNumber.outputs[0],
		15,
		'🚨 applyToNumber(5, triple) should return 15',
	)
	assert.strictEqual(
		applyToNumber.outputs[1],
		36,
		'🚨 applyToNumber(6, square) should return 36',
	)
})
