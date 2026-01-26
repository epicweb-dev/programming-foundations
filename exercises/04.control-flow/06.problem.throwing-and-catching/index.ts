// Throwing and Catching Errors
// Errors interrupt normal control flow, but try/catch lets you recover

const rawInput = 'not-a-number'

function parseNumber(value: string) {
	const parsed = Number(value)

	if (Number.isNaN(parsed)) {
		// 🐨 Throw a new Error with message `Invalid number: ${value}`
		// 💰 throw new Error(`Invalid number: ${value}`)
	}

	return parsed
}

let resultMessage = ''

// 🐨 Use a try/catch block to call parseNumber(rawInput)
// - If it succeeds, set resultMessage to `Parsed value: ${parsed}`
// - If it throws, set resultMessage to `Error: ${message}`
// 💰 In the catch, check `error instanceof Error` before using `error.message`

// console.log(resultMessage)

// 🐨 Export parseNumber and resultMessage so we can verify your work
// export { parseNumber, resultMessage }
