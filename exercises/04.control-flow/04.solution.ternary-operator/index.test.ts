import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('weatherDescription is exported', () => {
	assert.ok(
		'weatherDescription' in solution,
		'🚨 Make sure you export "weatherDescription"',
	)
})

await test('weatherDescription should be "comfortable" when temperature is 25', () => {
	assert.strictEqual(
		solution.weatherDescription,
		'comfortable',
		'🚨 weatherDescription should be "comfortable" because 25 is not > 30',
	)
})

await test('passed is exported', () => {
	assert.ok('passed' in solution, '🚨 Make sure you export "passed"')
})

await test('passed should be true when score is 85', () => {
	assert.strictEqual(
		solution.passed,
		true,
		'🚨 passed should be true because 85 >= 70',
	)
})

await test('stockMessage is exported', () => {
	assert.ok(
		'stockMessage' in solution,
		'🚨 Make sure you export "stockMessage"',
	)
})

await test('stockMessage should be "Out of stock" when stock is 0', () => {
	assert.strictEqual(
		solution.stockMessage,
		'Out of stock',
		'🚨 stockMessage should be "Out of stock" because 0 is not > 0',
	)
})
