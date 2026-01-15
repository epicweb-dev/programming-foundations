// Shopping Cart System
// Understanding when to use let vs const

const TAX_RATE = 0.08

let cartTotal = 0

// Product prices
const bookPrice = 15.99
const coffeePrice = 4.5
const laptopPrice = 999.99

cartTotal = cartTotal + bookPrice

cartTotal = cartTotal + coffeePrice

const finalTotal = cartTotal + cartTotal * TAX_RATE

// 🐨 Try uncommenting the line below - what happens?
// TAX_RATE = 0.10 // Error: Cannot assign to 'TAX_RATE' because it is a constant

console.log('Cart subtotal:', cartTotal)
console.log('Tax:', cartTotal * TAX_RATE)
console.log('Final total:', finalTotal)

console.log(
	'Results:',
	JSON.stringify({
		taxRate: TAX_RATE,
		cartTotal,
		finalTotal,
	}),
)
