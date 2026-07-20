import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('largeNumber is exported', () => {
	assert.ok(
		'largeNumber' in solution,
		'🚨 Make sure you export "largeNumber" - add: export { largeNumber, ... }',
	)
})

await test('largeNumber should be a bigint with correct value', () => {
	assert.strictEqual(
		typeof solution.largeNumber,
		'bigint',
		'🚨 largeNumber should be type bigint (use a bigint literal)',
	)
	assert.strictEqual(
		solution.largeNumber,
		9007199254740993n,
		'🚨 largeNumber should be 9007199254740993n',
	)
})

await test('anotherLarge is exported', () => {
	assert.ok(
		'anotherLarge' in solution,
		'🚨 Make sure you export "anotherLarge" - add: export { ..., anotherLarge, ... }',
	)
})

await test('anotherLarge should be a bigint with correct value', () => {
	assert.strictEqual(
		typeof solution.anotherLarge,
		'bigint',
		'🚨 anotherLarge should be type bigint',
	)
	assert.strictEqual(
		solution.anotherLarge,
		1000000000000000000n,
		'🚨 anotherLarge should be 1000000000000000000n',
	)
})

await test('sum is exported', () => {
	assert.ok(
		'sum' in solution,
		'🚨 Make sure you export "sum" - add: export { ..., sum, ... }',
	)
})

await test('sum should be the addition of both bigints', () => {
	assert.strictEqual(
		typeof solution.sum,
		'bigint',
		'🚨 sum should be type bigint',
	)
	assert.strictEqual(
		solution.sum,
		9007199254740993n + 1000000000000000000n,
		'🚨 sum should be largeNumber + anotherLarge',
	)
})

await test('userId is exported', () => {
	assert.ok(
		'userId' in solution,
		'🚨 Make sure you export "userId" - add: export { ..., userId, ... }',
	)
})

await test('userId should be a symbol', () => {
	assert.strictEqual(
		typeof solution.userId,
		'symbol',
		'🚨 userId should be type symbol with description "user-id"',
	)
})

await test('anotherId is exported', () => {
	assert.ok(
		'anotherId' in solution,
		'🚨 Make sure you export "anotherId" - add: export { ..., anotherId, ... }',
	)
})

await test('anotherId should be a symbol', () => {
	assert.strictEqual(
		typeof solution.anotherId,
		'symbol',
		'🚨 anotherId should be type symbol',
	)
})

await test('areEqual is exported', () => {
	assert.ok(
		'areEqual' in solution,
		'🚨 Make sure you export "areEqual" - add: export { ..., areEqual }',
	)
})

await test('symbols with same description should not be equal', () => {
	assert.strictEqual(
		solution.areEqual,
		false,
		'🚨 areEqual should be false - each Symbol() creates a unique value even with the same description',
	)
})
