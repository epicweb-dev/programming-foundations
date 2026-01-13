// Understanding the Never Type
// Functions that never return

function throwError(message: string): never {
	throw new Error(message)
}

function assertNonNull<T>(value: T | null, message: string): T {
	if (value === null) {
		throw new Error(message)
	}
	return value
}

// Example of exhaustiveness checking
type Status = 'pending' | 'success' | 'error'

function getStatusMessage(status: Status): string {
	switch (status) {
		case 'pending':
			return 'Loading...'
		case 'success':
			return 'Completed successfully!'
		case 'error':
			return 'An error occurred.'
		default: {
			// Exhaustiveness check - if we handled all cases,
			// status should be 'never' here
			const _exhaustive: never = status
			return _exhaustive
		}
	}
}

// ✅ Test
const name: string | null = 'Alice'
console.log(assertNonNull(name, 'Name is required'))

console.log(getStatusMessage('pending'))
console.log(getStatusMessage('success'))
console.log(getStatusMessage('error'))

export { throwError, assertNonNull, getStatusMessage }
