// BigInt and Symbol
// Less common but important primitive types

// BigInt for large integers
const largeNumber: bigint = 9007199254740993n
const anotherLarge: bigint = 1000000000000000000n
const sum: bigint = largeNumber + anotherLarge

// Symbols are unique
const userId: symbol = Symbol('user-id')
const anotherId: symbol = Symbol('user-id')
const areEqual: boolean = userId === anotherId // false!

console.log('Large number:', largeNumber)
console.log('Another large:', anotherLarge)
console.log('Sum of bigints:', sum)
console.log('userId:', userId)
console.log('anotherId:', anotherId)
console.log('Are symbols equal?', areEqual) // false - each Symbol is unique

export { largeNumber, anotherLarge, sum, userId, anotherId, areEqual }
