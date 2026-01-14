// Product Catalog System
// Let's create variables to store product information

// 🐨 Create a variable `price` with type `number` set to 29.99
const price: number = 29.99

// 🐨 Create a variable `productName` with type `string` set to "TypeScript Guide"
const productName: string = 'TypeScript Guide'

// 🐨 Create a variable `quantity` with type `number` set to 100
const quantity: number = 100

// 🐨 Create a `description` using a template literal that outputs:
// "Product: TypeScript Guide | Price: $29.99 | In Stock: 100"
// 💰 Use backticks ` and ${variable} syntax
const description = `Product: ${productName} | Price: $${price} | In Stock: ${quantity}`

// ✅ These console.logs will verify your work
console.log('Price:', price)
console.log('Product:', productName)
console.log('Quantity:', quantity)
console.log('Description:', description)
