// Understanding the Never Type
// Functions that never return

function throwError(message: string): never {
	throw new Error(message)
}

function parseNumber(value: string): number {
	const parsed = Number(value)
	if (Number.isNaN(parsed)) {
		throwError('Invalid number')
	}
	return parsed
}

function ensurePositive(value: number): number {
	if (value < 0) {
		throwError('Number must be positive')
	}
	return value
}

// ✅ Test
console.log(parseNumber('42'))
console.log(ensurePositive(5))

let throwErrorMessage: string | null = null
try {
	throwError('Test error')
} catch (error) {
	throwErrorMessage = error instanceof Error ? error.message : 'Unknown error'
}

let parseNumberError: string | null = null
try {
	parseNumber('not-a-number')
} catch (error) {
	parseNumberError = error instanceof Error ? error.message : 'Unknown error'
}

let ensurePositiveError: string | null = null
try {
	ensurePositive(-1)
} catch (error) {
	ensurePositiveError = error instanceof Error ? error.message : 'Unknown error'
}

console.log(
	'Results:',
	JSON.stringify({
		throwErrorMessage,
		parseNumber: parseNumber('42'),
		parseNumberError,
		ensurePositive: ensurePositive(5),
		ensurePositiveError,
	}),
)
