import { testStep, expect } from '@epic-web/workshop-utils/test'
import { shoppingList } from './index.ts'

await testStep('shoppingList should be mutated correctly', async () => {
	expect(
		shoppingList,
		'🚨 shoppingList should contain ["almond milk", "eggs", "bread", "butter"] - use array methods like push() to add items',
	).toEqual(['almond milk', 'eggs', 'bread', 'butter'])
	expect(
		shoppingList.length,
		'🚨 shoppingList should have 4 items - make sure you added all the required items',
	).toBe(4)
})

await testStep('first element should be "almond milk"', async () => {
	expect(
		shoppingList[0],
		'🚨 The first item should be "almond milk" - check the order you added items to the array',
	).toBe('almond milk')
})

await testStep('last element should be "butter"', async () => {
	expect(
		shoppingList[shoppingList.length - 1],
		'🚨 The last item should be "butter" - make sure you added it as the final item',
	).toBe('butter')
})
