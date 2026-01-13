import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	largeNumber,
	anotherLarge,
	sum,
	userId,
	anotherId,
	areEqual,
} from './index.ts'

await test('largeNumber should be a bigint', () => {
	assert.strictEqual(
		typeof largeNumber,
		'bigint',
		'🚨 largeNumber should be type bigint - use the n suffix: 9007199254740993n',
	)
	assert.strictEqual(
		largeNumber,
		9007199254740993n,
		'🚨 largeNumber should be 9007199254740993n',
	)
})

await test('anotherLarge should be a bigint', () => {
	assert.strictEqual(
		typeof anotherLarge,
		'bigint',
		'🚨 anotherLarge should be type bigint',
	)
	assert.strictEqual(
		anotherLarge,
		1000000000000000000n,
		'🚨 anotherLarge should be 1000000000000000000n',
	)
})

await test('sum should be the addition of both bigints', () => {
	assert.strictEqual(typeof sum, 'bigint', '🚨 sum should be type bigint')
	assert.strictEqual(
		sum,
		largeNumber + anotherLarge,
		'🚨 sum should be largeNumber + anotherLarge',
	)
})

await test('userId and anotherId should be symbols', () => {
	assert.strictEqual(
		typeof userId,
		'symbol',
		'🚨 userId should be type symbol - use Symbol("user-id")',
	)
	assert.strictEqual(
		typeof anotherId,
		'symbol',
		'🚨 anotherId should be type symbol',
	)
})

await test('symbols with same description should not be equal', () => {
	assert.strictEqual(
		areEqual,
		false,
		'🚨 areEqual should be false - each Symbol() creates a unique value even with the same description',
	)
})
