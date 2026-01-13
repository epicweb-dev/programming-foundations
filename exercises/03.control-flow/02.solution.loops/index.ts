// Shopping Cart Calculator
// Using loops to process arrays

const prices: number[] = [29.99, 9.99, 49.99, 4.99, 19.99]

let total = 0

let expensiveItemCount = 0

for (let i = 0; i < prices.length; i++) {
	const price = prices[i]
	total += price

	if (price > 10) {
		expensiveItemCount++
	}
}

console.log(`Total: $${total.toFixed(2)}`)
console.log(`Expensive items (>$10): ${expensiveItemCount}`)

export {}
