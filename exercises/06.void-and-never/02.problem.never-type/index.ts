// Understanding the Never Type
// Functions that never return

// 🐨 Create `throwError` that takes a message and throws
// It should return `never` because it always throws
// 💰 function throwError(message: string): never {
// 💰   throw new Error(message)
// 💰 }

// 🐨 Create `assertNonNull` that takes a value of type T | null
// If null, throw an error. Otherwise, return the value.
// 💰 function assertNonNull<T>(value: T | null, message: string): T
// 🦉 Note: The <T> syntax is called "generics" - we'll cover this in detail
// in the Type Safety workshop. For now, just follow the pattern above.

// Example of exhaustiveness checking
type Status = 'pending' | 'success' | 'error'

// 🐨 Complete this function to handle all cases
// The default case should use the never exhaustiveness pattern
// @ts-expect-error - 💣 remove this comment
function getStatusMessage(status: Status): string {
	switch (status) {
		case 'pending':
			return 'Loading...'
		// 🐨 Add cases for 'success' and 'error'
		// 🐨 Add a default case with exhaustiveness check:
		// default: {
		//   const _exhaustive: never = status
		//   return _exhaustive
		// }
	}
}

// ✅ Test
// const name: string | null = 'Alice'
// console.log(assertNonNull(name, 'Name is required'))

console.log(getStatusMessage('pending'))
// console.log(getStatusMessage('success'))
// console.log(getStatusMessage('error'))

export {}
