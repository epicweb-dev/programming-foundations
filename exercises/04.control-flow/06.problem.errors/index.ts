// Throwing and Catching Errors
// Errors interrupt normal control flow, but try/catch lets you recover

const rawInput = 'not-a-number'

let resultMessage = ''
let hadError = false

// 🐨 Use a try/catch block to convert rawInput to a number
// - Inside try, create parsedValue with Number(rawInput)
// - If Number.isNaN(parsedValue), throw a new Error with message `Invalid number: ${rawInput}`
// - If it succeeds, set resultMessage to `Parsed value: ${parsedValue}`
// - If it throws, set hadError to true and resultMessage to `Error: ${message}`

// console.log(resultMessage)

// 🐨 Export resultMessage and hadError so we can verify your work
// export { resultMessage, hadError }
