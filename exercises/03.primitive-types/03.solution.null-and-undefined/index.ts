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
console.log(
	'Results:',
	JSON.stringify({
		discountCode: discountCode === undefined ? 'undefined' : discountCode,
		lastPurchaseDate,
	}),
)
