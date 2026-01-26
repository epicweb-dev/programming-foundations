// Understanding the Never Type
// Functions that never return

// 🐨 Create `throwError` that takes a message and throws
// It should return `never` because it always throws
// 💰 A never-returning function should always throw

// 🐨 Create `parseNumber` that:
// - Takes a string
// - Converts it to a number with Number(...)
// - Throws if the result is NaN
// 💰 Return a number or throw when parsing fails

// 🐨 Create `ensurePositive` that:
// - Takes a number
// - Throws if the number is negative
// - Returns the number if it's valid
// 💰 Return the number or throw if it is negative

// ✅ Test
// console.log(parseNumber('42'))
// console.log(ensurePositive(5))

// 🐨 Export your functions so we can verify your work
// export { throwError, parseNumber, ensurePositive }
