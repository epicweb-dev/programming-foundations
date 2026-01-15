// BigInt and Symbol
// Less common but important primitive types

// 🐨 Create a bigint variable `largeNumber` with the value 9007199254740993n
// This is larger than Number.MAX_SAFE_INTEGER!
// 💰 const largeNumber: bigint = 9007199254740993n

// 🐨 Create another bigint `anotherLarge` with value 1000000000000000000n

// 🐨 Add them together into a variable called `sum`
// 💰 const sum = largeNumber + anotherLarge

// 🐨 Create a symbol called `userId` with description 'user-id'
// 💰 const userId: symbol = Symbol('user-id')

// 🐨 Create another symbol called `anotherId` with the same description 'user-id'

// 🐨 Create a variable `areEqual` that compares userId === anotherId
// This will be false because each Symbol() call creates a unique value!

// Test - uncomment when ready
// console.log('Large number:', largeNumber)
// console.log('Sum of bigints:', sum)
// console.log('userId:', userId)
// console.log('anotherId:', anotherId)
// console.log('Are symbols equal?', areEqual) // false

// 🐨 Export your variables so we can verify your work
// 💰 export { largeNumber, anotherLarge, sum, userId, anotherId, areEqual }
