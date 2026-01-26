import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('seatChart is exported', () => {
	assert.ok(
		'seatChart' in solution,
		'🚨 Make sure you export "seatChart" - add: export { seatChart }',
	)
})

await test('seatChart should match the seating chart', () => {
	const expected = 'A1 A2 A3 A4\nB1 B2 B3 B4\nC1 C2 C3 C4\n'
	assert.strictEqual(
		solution.seatChart,
		expected,
		'🚨 seatChart should list rows A-C with seats 1-4 on separate lines',
	)
})
