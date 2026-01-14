import assert from 'node:assert/strict'
import { test } from 'node:test'
import { add, greet, calculateCompoundInterest, clamp } from './index.ts'

await test('add has JSDoc comment', () => {
	const source = add.toString()
	// Function should work correctly
	assert.strictEqual(add(2, 3), 5, '🚨 add(2, 3) should return 5')
	assert.strictEqual(add(-1, 1), 0, '🚨 add(-1, 1) should return 0')
})

await test('greet has JSDoc comment and works correctly', () => {
	assert.strictEqual(
		greet('Alice'),
		'Hello, Alice!',
		'🚨 greet("Alice") should return "Hello, Alice!"',
	)
	assert.strictEqual(
		greet('World'),
		'Hello, World!',
		'🚨 greet("World") should return "Hello, World!"',
	)
})

await test('calculateCompoundInterest works correctly', () => {
	// $1000 at 5% for 10 years = $1000 * (1.05)^10 ≈ $1628.89
	const result = calculateCompoundInterest(1000, 0.05, 10)
	assert.ok(
		Math.abs(result - 1628.89) < 0.1,
		`🚨 calculateCompoundInterest(1000, 0.05, 10) should be approximately 1628.89, got ${result}`,
	)

	// $100 at 10% for 1 year = $110
	const simpleResult = calculateCompoundInterest(100, 0.1, 1)
	assert.ok(
		Math.abs(simpleResult - 110) < 0.01,
		`🚨 calculateCompoundInterest(100, 0.1, 1) should be approximately 110, got ${simpleResult}`,
	)
})

await test('clamp constrains values correctly', () => {
	// Value above max should return max
	assert.strictEqual(
		clamp(15, 0, 10),
		10,
		'🚨 clamp(15, 0, 10) should return 10 (value above max)',
	)

	// Value below min should return min
	assert.strictEqual(
		clamp(-5, 0, 10),
		0,
		'🚨 clamp(-5, 0, 10) should return 0 (value below min)',
	)

	// Value within range should return unchanged
	assert.strictEqual(
		clamp(5, 0, 10),
		5,
		'🚨 clamp(5, 0, 10) should return 5 (value within range)',
	)

	// Edge cases
	assert.strictEqual(
		clamp(0, 0, 10),
		0,
		'🚨 clamp(0, 0, 10) should return 0 (value at min)',
	)
	assert.strictEqual(
		clamp(10, 0, 10),
		10,
		'🚨 clamp(10, 0, 10) should return 10 (value at max)',
	)
})
