// Understanding Reassignment vs Mutation

// This object is declared with const
const person = { name: 'Alice', age: 30, city: 'Seattle' }

console.log('Original person:', person)

// 🐨 Try to reassign person to a new object:
// person = { name: 'Bob', age: 25, city: 'Portland' }
// 💣 Uncomment the line above and see the TypeScript error

// 🐨 Now try MUTATING the object by changing the age property to 31

// 🐨 Mutate again by changing the city to 'Portland'

console.log('Modified person:', person)

// 🦉 Key insight: const prevents reassignment, not mutation!
// The variable person always points to the SAME object,
// but the properties of that object can change.

// 🐨 Export your variable so we can verify your work
// export { person }
