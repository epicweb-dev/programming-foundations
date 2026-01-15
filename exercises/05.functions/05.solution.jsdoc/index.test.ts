import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('add is exported', () => {
	assert.ok(
		'add' in solution,
		'🚨 Make sure you export "add" - add: export { add, ... }',
	)
})

await test('add works correctly', () => {
	assert.strictEqual(solution.add(2, 3), 5, '🚨 add(2, 3) should return 5')
	assert.strictEqual(solution.add(-1, 1), 0, '🚨 add(-1, 1) should return 0')
})

await test('greet is exported', () => {
	assert.ok(
		'greet' in solution,
		'🚨 Make sure you export "greet" - add: export { add, greet, ... }',
	)
})

await test('greet works correctly', () => {
	assert.strictEqual(
		solution.greet('Alice'),
		'Hello, Alice!',
		'🚨 greet("Alice") should return "Hello, Alice!"',
	)
	assert.strictEqual(
		solution.greet('World'),
		'Hello, World!',
		'🚨 greet("World") should return "Hello, World!"',
	)
})

await test('calculateCompoundInterest is exported', () => {
	assert.ok(
		'calculateCompoundInterest' in solution,
		'🚨 Make sure you export "calculateCompoundInterest" - add: export { ..., calculateCompoundInterest, ... }',
	)
})

await test('calculateCompoundInterest works correctly', () => {
	// $1000 at 5% for 10 years = $1000 * (1.05)^10 ≈ $1628.89
	const result = solution.calculateCompoundInterest(1000, 0.05, 10)
	assert.ok(
		Math.abs(result - 1628.89) < 0.1,
		`🚨 calculateCompoundInterest(1000, 0.05, 10) should be approximately 1628.89, got ${result}`,
	)

	// $100 at 10% for 1 year = $110
	const simpleResult = solution.calculateCompoundInterest(100, 0.1, 1)
	assert.ok(
		Math.abs(simpleResult - 110) < 0.01,
		`🚨 calculateCompoundInterest(100, 0.1, 1) should be approximately 110, got ${simpleResult}`,
	)
})

await test('clamp is exported', () => {
	assert.ok(
		'clamp' in solution,
		'🚨 Make sure you export "clamp" - add: export { ..., clamp }',
	)
})

await test('clamp constrains values correctly', () => {
	// Value above max should return max
	assert.strictEqual(
		solution.clamp(15, 0, 10),
		10,
		'🚨 clamp(15, 0, 10) should return 10 (value above max)',
	)

	// Value below min should return min
	assert.strictEqual(
		solution.clamp(-5, 0, 10),
		0,
		'🚨 clamp(-5, 0, 10) should return 0 (value below min)',
	)

	// Value within range should return unchanged
	assert.strictEqual(
		solution.clamp(5, 0, 10),
		5,
		'🚨 clamp(5, 0, 10) should return 5 (value within range)',
	)

	// Edge cases
	assert.strictEqual(
		solution.clamp(0, 0, 10),
		0,
		'🚨 clamp(0, 0, 10) should return 0 (value at min)',
	)
	assert.strictEqual(
		solution.clamp(10, 0, 10),
		10,
		'🚨 clamp(10, 0, 10) should return 10 (value at max)',
	)
})
