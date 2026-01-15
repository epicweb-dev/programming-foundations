// Escaping Strings
// Learn to include special characters in strings

// prettier-ignore
const apostrophe = 'It\'s working!'
console.log(apostrophe)

// prettier-ignore
const quotes = "She said \"Hi\""
console.log(quotes)

// prettier-ignore
const newlines = 'Hello\nWorld'
console.log(newlines)

// prettier-ignore
const tabs = 'Name:\tAge:\tCity:'
console.log(tabs)

console.log('Results:', JSON.stringify({ apostrophe, quotes, newlines, tabs }))
