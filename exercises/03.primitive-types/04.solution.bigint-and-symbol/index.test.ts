import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { largeNumber, anotherLarge, sum, userIdType, anotherIdType, areEqual } =
	JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('largeNumber should be a bigint', () => {
	assert.strictEqual(
		typeof largeNumber,
		'string',
		'🚨 largeNumber should be type bigint - use the n suffix: 9007199254740993n',
	)
	assert.strictEqual(
		largeNumber,
		'9007199254740993',
		'🚨 largeNumber should be 9007199254740993n',
	)
})

await test('anotherLarge should be a bigint', () => {
	assert.strictEqual(
		typeof anotherLarge,
		'string',
		'🚨 anotherLarge should be type bigint',
	)
	assert.strictEqual(
		anotherLarge,
		'1000000000000000000',
		'🚨 anotherLarge should be 1000000000000000000n',
	)
})

await test('sum should be the addition of both bigints', () => {
	assert.strictEqual(typeof sum, 'string', '🚨 sum should be type bigint')
	assert.strictEqual(
		sum,
		(9007199254740993n + 1000000000000000000n).toString(),
		'🚨 sum should be largeNumber + anotherLarge',
	)
})

await test('userId and anotherId should be symbols', () => {
	assert.strictEqual(
		userIdType,
		'symbol',
		'🚨 userId should be type symbol - use Symbol("user-id")',
	)
	assert.strictEqual(
		anotherIdType,
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
