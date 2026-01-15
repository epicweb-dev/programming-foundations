import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { add, greet, calculateCompoundInterest, clamp } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('add has JSDoc comment', () => {
	// Function should work correctly
	assert.strictEqual(add[0], 5, '🚨 add(2, 3) should return 5')
	assert.strictEqual(add[1], 0, '🚨 add(-1, 1) should return 0')
})

await test('greet has JSDoc comment and works correctly', () => {
	assert.strictEqual(
		greet[0],
		'Hello, Alice!',
		'🚨 greet("Alice") should return "Hello, Alice!"',
	)
	assert.strictEqual(
		greet[1],
		'Hello, World!',
		'🚨 greet("World") should return "Hello, World!"',
	)
})

await test('calculateCompoundInterest works correctly', () => {
	// $1000 at 5% for 10 years = $1000 * (1.05)^10 ≈ $1628.89
	const result = calculateCompoundInterest[0]
	assert.ok(
		Math.abs(result - 1628.89) < 0.1,
		`🚨 calculateCompoundInterest(1000, 0.05, 10) should be approximately 1628.89, got ${result}`,
	)

	// $100 at 10% for 1 year = $110
	const simpleResult = calculateCompoundInterest[1]
	assert.ok(
		Math.abs(simpleResult - 110) < 0.01,
		`🚨 calculateCompoundInterest(100, 0.1, 1) should be approximately 110, got ${simpleResult}`,
	)
})

await test('clamp constrains values correctly', () => {
	// Value above max should return max
	assert.strictEqual(
		clamp[0],
		10,
		'🚨 clamp(15, 0, 10) should return 10 (value above max)',
	)

	// Value below min should return min
	assert.strictEqual(
		clamp[1],
		0,
		'🚨 clamp(-5, 0, 10) should return 0 (value below min)',
	)

	// Value within range should return unchanged
	assert.strictEqual(
		clamp[2],
		5,
		'🚨 clamp(5, 0, 10) should return 5 (value within range)',
	)

	// Edge cases
	assert.strictEqual(
		clamp[3],
		0,
		'🚨 clamp(0, 0, 10) should return 0 (value at min)',
	)
	assert.strictEqual(
		clamp[4],
		10,
		'🚨 clamp(10, 0, 10) should return 10 (value at max)',
	)
})
