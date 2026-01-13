// Shopping Cart Analysis
// Using for...of for cleaner iteration

const prices: number[] = [29.99, 9.99, 49.99, 4.99, 19.99]

let total = 0
let highestPrice = prices[0]

for (const price of prices) {
	total += price

	if (price > highestPrice) {
		highestPrice = price
	}
}

const average = total / prices.length

console.log(`Total: $${total.toFixed(2)}`)
console.log(`Average: $${average.toFixed(2)}`)
console.log(`Highest: $${highestPrice.toFixed(2)}`)

export { prices, total, highestPrice, average }
