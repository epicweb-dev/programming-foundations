// Handling Missing Data
// Working with null and undefined

const discountCode = undefined

const lastPurchaseDate = null

// Using ternary operators to check for values
console.log(
	discountCode !== undefined
		? 'Discount code: ' + discountCode
		: 'No discount code available',
)

console.log(
	lastPurchaseDate !== null
		? 'Last purchase: ' + lastPurchaseDate
		: 'No previous purchases',
)

export { discountCode, lastPurchaseDate }
