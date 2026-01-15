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

export { throwError, parseNumber, ensurePositive }
