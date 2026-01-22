// Understanding the Never Type
// Functions that never return

// 🐨 Create `throwError` that takes a message and throws
// It should return `never` because it always throws
// 💰 function throwError(message: string): never {
// 💰   throw new Error(message)
// 💰 }

// 🐨 Create `parseNumber` that:
// - Takes a string
// - Converts it to a number with Number(...)
// - Throws if the result is NaN
// 💰 function parseNumber(value: string): number

// 🐨 Create `ensurePositive` that:
// - Takes a number
// - Throws if the number is negative
// - Returns the number if it's valid
// 💰 function ensurePositive(value: number): number

// ✅ Test
// console.log(parseNumber('42'))
// console.log(ensurePositive(5))

// 🐨 Export your functions so we can verify your work
// export { throwError, parseNumber, ensurePositive }
