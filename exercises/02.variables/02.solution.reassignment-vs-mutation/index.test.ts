import { testStep, expect } from '@epic-web/workshop-utils/test'
import { shoppingList } from './index.ts'

await testStep('shoppingList should be mutated correctly', async () => {
	expect(shoppingList).toEqual(['almond milk', 'eggs', 'bread', 'butter'])
	expect(shoppingList.length).toBe(4)
})

await testStep('first element should be "almond milk"', async () => {
	expect(shoppingList[0]).toBe('almond milk')
})

await testStep('last element should be "butter"', async () => {
	expect(shoppingList[shoppingList.length - 1]).toBe('butter')
})
