// Understanding Reassignment vs Mutation

// This array is declared with const
const shoppingList: Array<string> = ['milk', 'eggs', 'bread']

console.log('Original list:', shoppingList)

// 🐨 Try to reassign shoppingList to a new array:
// shoppingList = ['apples', 'oranges']
// 💣 Uncomment the line above and see the TypeScript error

// 🐨 Now try MUTATING the array by adding an item with push()
// 💰 shoppingList.push('butter')

// 🐨 Mutate again by changing the first item
// 💰 shoppingList[0] = 'almond milk'

console.log('Modified list:', shoppingList)

// 🦉 Key insight: const prevents reassignment, not mutation!
// The variable shoppingList always points to the SAME array,
// but the contents of that array can change.

export {}
