// Ternary Operator
// A concise way to choose between two values

const temperature = 25

const weatherDescription = temperature > 30 ? 'hot' : 'comfortable'

const score = 85

const passed = score >= 70 ? true : false

const stock = 0

const stockMessage = stock > 0 ? 'In stock' : 'Out of stock'

console.log(`Temperature: ${temperature} → ${weatherDescription}`)
console.log(`Score: ${score} → ${passed ? 'Passed' : 'Failed'}`)
console.log(`Stock: ${stock} → ${stockMessage}`)

export { weatherDescription, passed, stockMessage }
