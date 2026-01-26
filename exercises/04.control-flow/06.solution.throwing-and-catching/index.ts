// Throwing and Catching Errors
// Errors interrupt normal control flow, but try/catch lets you recover

const rawInput = 'not-a-number'

function parseNumber(value: string) {
	const parsed = Number(value)

	if (Number.isNaN(parsed)) {
		throw new Error(`Invalid number: ${value}`)
	}

	return parsed
}

let resultMessage = ''

try {
	const parsed = parseNumber(rawInput)
	resultMessage = `Parsed value: ${parsed}`
} catch (error) {
	if (error instanceof Error) {
		resultMessage = `Error: ${error.message}`
	} else {
		resultMessage = 'Error: Unknown error'
	}
}

console.log(resultMessage)

export { parseNumber, resultMessage }
