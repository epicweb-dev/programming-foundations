// E-commerce Utility Functions
// Creating functions with typed parameters and return values

function calculateTax(amount: number, rate: number): number {
	return amount * rate
}

function formatPrice(cents: number): string {
	return `$${(cents / 100).toFixed(2)}`
}

function applyDiscount(price: number, discountPercent: number): number {
	return price - (price * discountPercent) / 100
}

// ✅ Test your functions
console.log(calculateTax(100, 0.08)) // 8
console.log(formatPrice(1999)) // "$19.99"
console.log(applyDiscount(100, 20)) // 80

export { calculateTax, formatPrice, applyDiscount }
