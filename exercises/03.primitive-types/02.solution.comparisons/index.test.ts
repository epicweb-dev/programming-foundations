import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('looseEqual is exported', () => {
	assert.ok('looseEqual' in solution, '🚨 Make sure you export "looseEqual"')
})

await test('looseEqual should be true (100 == "100")', () => {
	assert.strictEqual(
		solution.looseEqual,
		true,
		'🚨 looseEqual should be true because loose equality converts types',
	)
})

await test('strictEqual is exported', () => {
	assert.ok('strictEqual' in solution, '🚨 Make sure you export "strictEqual"')
})

await test('strictEqual should be false (100 === "100")', () => {
	assert.strictEqual(
		solution.strictEqual,
		false,
		'🚨 strictEqual should be false because number !== string',
	)
})

await test('notEqualLoose is exported', () => {
	assert.ok(
		'notEqualLoose' in solution,
		'🚨 Make sure you export "notEqualLoose"',
	)
})

await test('notEqualLoose should be true (10 != 20)', () => {
	assert.strictEqual(
		solution.notEqualLoose,
		true,
		'🚨 notEqualLoose should be true because 10 is not equal to 20',
	)
})

await test('notEqualStrict is exported', () => {
	assert.ok(
		'notEqualStrict' in solution,
		'🚨 Make sure you export "notEqualStrict"',
	)
})

await test('notEqualStrict should be true (10 !== 20)', () => {
	assert.strictEqual(
		solution.notEqualStrict,
		true,
		'🚨 notEqualStrict should be true because 10 is not equal to 20',
	)
})

await test('isGreater is exported', () => {
	assert.ok('isGreater' in solution, '🚨 Make sure you export "isGreater"')
})

await test('isGreater should be true (20 > 10)', () => {
	assert.strictEqual(
		solution.isGreater,
		true,
		'🚨 isGreater should be true because 20 is greater than 10',
	)
})

await test('isLessOrEqual is exported', () => {
	assert.ok(
		'isLessOrEqual' in solution,
		'🚨 Make sure you export "isLessOrEqual"',
	)
})

await test('isLessOrEqual should be true (10 <= 20)', () => {
	assert.strictEqual(
		solution.isLessOrEqual,
		true,
		'🚨 isLessOrEqual should be true because 10 is less than or equal to 20',
	)
})
