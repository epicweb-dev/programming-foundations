// Product Catalog System
// Let's create variables to store product information

const price: number = 29.99

const productName: string = 'TypeScript Guide'

const quantity: number = 100

const description: string = `Product: ${productName} | Price: $${price} | In Stock: ${quantity}`

// ✅ These console.logs will verify your work
console.log('Price:', price)
console.log('Product:', productName)
console.log('Quantity:', quantity)
console.log('Description:', description)

console.log(
	'Results JSON:',
	JSON.stringify({ price, productName, quantity, description }),
)
