// Understanding Reassignment vs Mutation

// This array is declared with const
const shoppingList: string[] = ['milk', 'eggs', 'bread']

console.log('Original list:', shoppingList)

// ❌ This would cause an error - can't reassign a const
// shoppingList = ['apples', 'oranges']
// Error: Cannot assign to 'shoppingList' because it is a constant

// ✅ But we CAN mutate the array
shoppingList.push('butter')

// ✅ And we can modify elements
shoppingList[0] = 'almond milk'

console.log('Modified list:', shoppingList)
// Output: ['almond milk', 'eggs', 'bread', 'butter']

// 🦉 Key insight: const prevents reassignment, not mutation!
// The variable shoppingList always points to the SAME array,
// but the contents of that array can change.

export {}
