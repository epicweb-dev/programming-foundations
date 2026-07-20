// Understanding the Never Type
// Functions that never return

// 🐨 Create `throwError(message: string): never`
// It should always throw an Error with that message

// 🐨 Create `parseNumber(value: string): number`
// - Return the parsed number for valid numeric strings
// - Call throwError('Invalid number') when the value cannot be parsed

// 🐨 Create `ensurePositive(value: number): number`
// - Return the number when it is zero or positive
// - Call throwError('Number must be positive') when it is negative

// ✅ Test
// console.log(parseNumber('42'))
// console.log(ensurePositive(5))

// 🐨 Export throwError, parseNumber, and ensurePositive
// export { throwError, parseNumber, ensurePositive }
