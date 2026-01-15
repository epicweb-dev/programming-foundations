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

// 🐨 When you're done, uncomment this:
// let throwErrorMessage: string | null = null
// try {
// 	throwError('Test error')
// } catch (error) {
// 	throwErrorMessage = error instanceof Error ? error.message : 'Unknown error'
// }
// let parseNumberError: string | null = null
// try {
// 	parseNumber('not-a-number')
// } catch (error) {
// 	parseNumberError = error instanceof Error ? error.message : 'Unknown error'
// }
// let ensurePositiveError: string | null = null
// try {
// 	ensurePositive(-1)
// } catch (error) {
// 	ensurePositiveError = error instanceof Error ? error.message : 'Unknown error'
// }
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		throwErrorMessage,
// 		parseNumber: parseNumber('42'),
// 		parseNumberError,
// 		ensurePositive: ensurePositive(5),
// 		ensurePositiveError,
// 	}),
// )
