// Throwing and Catching Errors
// Errors interrupt normal control flow, but try/catch lets you recover

const rawInput = 'not-a-number'

let resultMessage = ''
let hadError = false

// 🐨 Parse rawInput as a number inside try/catch
// - Invalid input: throw an error with message "Invalid number: " + the raw input
// - Success: resultMessage = "Parsed value: " + the parsed number
// - Catch: hadError = true, resultMessage = "Error: " + the error message
// 💰 The caught value is unknown — narrow it before reading a message

// console.log(resultMessage)

// 🐨 Export resultMessage and hadError so we can verify your work
// export { resultMessage, hadError }
