import assert from 'node:assert/strict'
import { test } from 'node:test'
import { shoppingList } from './index.ts'

await test('shoppingList should be mutated correctly', () => {
	assert.deepStrictEqual(
		shoppingList,
		['almond milk', 'eggs', 'bread', 'butter'],
		'🚨 shoppingList should contain ["almond milk", "eggs", "bread", "butter"] - use array methods like push() to add items',
	)
	assert.strictEqual(
		shoppingList.length,
		4,
		'🚨 shoppingList should have 4 items - make sure you added all the required items',
	)
})

await test('first element should be "almond milk"', () => {
	assert.strictEqual(
		shoppingList[0],
		'almond milk',
		'🚨 The first item should be "almond milk" - check the order you added items to the array',
	)
})

await test('last element should be "butter"', () => {
	assert.strictEqual(
		shoppingList[shoppingList.length - 1],
		'butter',
		'🚨 The last item should be "butter" - make sure you added it as the final item',
	)
})
