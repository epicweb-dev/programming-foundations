// Throwing and Catching Errors
// Errors interrupt normal control flow, but try/catch lets you recover

const rawInput = 'not-a-number'

let resultMessage = ''
let hadError = false

try {
	const parsedValue = Number(rawInput)

	if (Number.isNaN(parsedValue)) {
		throw new Error(`Invalid number: ${rawInput}`)
	}

	resultMessage = `Parsed value: ${parsedValue}`
} catch (error) {
	hadError = true
	if (error instanceof Error) {
		resultMessage = `Error: ${error.message}`
	} else {
		resultMessage = 'Error: Unknown error'
	}
}

console.log(resultMessage)

export { resultMessage, hadError }
