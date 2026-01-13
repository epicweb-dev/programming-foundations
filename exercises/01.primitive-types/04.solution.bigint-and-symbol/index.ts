// BigInt and Symbol
// Less common but important primitive types

// BigInt for large integers (TypeScript infers bigint from the n suffix)
const largeNumber = 9007199254740993n
const anotherLarge = 1000000000000000000n
const sum = largeNumber + anotherLarge

// Symbols are unique (TypeScript infers symbol from Symbol())
const userId = Symbol('user-id')
const anotherId = Symbol('user-id')
const areEqual = userId === anotherId // false!

console.log('Large number:', largeNumber)
console.log('Another large:', anotherLarge)
console.log('Sum of bigints:', sum)
console.log('userId:', userId)
console.log('anotherId:', anotherId)
console.log('Are symbols equal?', areEqual) // false - each Symbol is unique

export { largeNumber, anotherLarge, sum, userId, anotherId, areEqual }
