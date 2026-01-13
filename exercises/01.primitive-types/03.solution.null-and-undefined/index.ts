// Handling Missing Data
// Working with null and undefined

let discountCode: string | undefined

const lastPurchaseDate: string | null = null

if (discountCode !== undefined) {
	console.log(`Discount code: ${discountCode}`)
} else {
	console.log('No discount code available')
}

if (lastPurchaseDate !== null) {
	console.log(`Last purchase: ${lastPurchaseDate}`)
} else {
	console.log('No previous purchases')
}

export {}
