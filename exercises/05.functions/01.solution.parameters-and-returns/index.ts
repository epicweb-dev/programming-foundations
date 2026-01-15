// E-commerce Utility Functions
// Creating functions with typed parameters and returns

function calculateTax(amount: number, rate: number) {
	return amount * rate
}

function formatPrice(cents: number) {
	return `$${(cents / 100).toFixed(2)}`
}

function applyDiscount(price: number, discountPercent: number) {
	return price - (price * discountPercent) / 100
}

// ✅ Test your functions
console.log(calculateTax(100, 0.08)) // 8
console.log(formatPrice(1999)) // "$19.99"
console.log(applyDiscount(100, 20)) // 80
console.log(
	'Results JSON:',
	JSON.stringify({
		calculateTax: [calculateTax(100, 0.08), calculateTax(50, 0.1)],
		formatPrice: [formatPrice(1999), formatPrice(100), formatPrice(50)],
		applyDiscount: [
			applyDiscount(100, 20),
			applyDiscount(50, 10),
			applyDiscount(200, 25),
		],
	}),
)
