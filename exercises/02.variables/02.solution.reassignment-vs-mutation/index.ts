// Understanding Reassignment vs Mutation

// This object is declared with const
const person = { name: 'Alice', age: 30, city: 'Seattle' }

console.log('Original person:', person)

// ❌ This would cause an error - can't reassign a const
// person = { name: 'Bob', age: 25, city: 'Portland' }
// Error: Cannot assign to 'person' because it is a constant

// ✅ But we CAN mutate the object
person.age = 31

// ✅ And we can modify other properties
person.city = 'Portland'

console.log('Modified person:', person)
// Output: { name: 'Alice', age: 31, city: 'Portland' }

// 🦉 Key insight: const prevents reassignment, not mutation!
// The variable person always points to the SAME object,
// but the properties of that object can change.

export { person }
