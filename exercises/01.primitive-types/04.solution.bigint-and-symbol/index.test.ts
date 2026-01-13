import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	largeNumber,
	anotherLarge,
	sum,
	userId,
	anotherId,
	areEqual,
} from './index.ts'

await testStep('largeNumber should be a bigint', async () => {
	expect(
		typeof largeNumber,
		'🚨 largeNumber should be type bigint - use the n suffix: 9007199254740993n',
	).toBe('bigint')
	expect(largeNumber, '🚨 largeNumber should be 9007199254740993n').toBe(
		9007199254740993n,
	)
})

await testStep('anotherLarge should be a bigint', async () => {
	expect(typeof anotherLarge, '🚨 anotherLarge should be type bigint').toBe(
		'bigint',
	)
	expect(anotherLarge, '🚨 anotherLarge should be 1000000000000000000n').toBe(
		1000000000000000000n,
	)
})

await testStep('sum should be the addition of both bigints', async () => {
	expect(typeof sum, '🚨 sum should be type bigint').toBe('bigint')
	expect(sum, '🚨 sum should be largeNumber + anotherLarge').toBe(
		largeNumber + anotherLarge,
	)
})

await testStep('userId and anotherId should be symbols', async () => {
	expect(
		typeof userId,
		'🚨 userId should be type symbol - use Symbol("user-id")',
	).toBe('symbol')
	expect(typeof anotherId, '🚨 anotherId should be type symbol').toBe('symbol')
})

await testStep(
	'symbols with same description should not be equal',
	async () => {
		expect(
			areEqual,
			'🚨 areEqual should be false - each Symbol() creates a unique value even with the same description',
		).toBe(false)
	},
)
