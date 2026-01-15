// E-commerce Utility Functions
// Creating functions with typed parameters and returns

// 🐨 Create a function `calculateTax` that:
// - Takes `amount` (number) and `rate` (number)
// - Returns the tax amount (amount * rate)
// 💰 function calculateTax(amount: number, rate: number): number

// 🐨 Create a function `formatPrice` that:
// - Takes `cents` (number)
// - Returns a formatted dollar string like "$19.99"
// 💰 return `$${(cents / 100).toFixed(2)}`

// 🐨 Create a function `applyDiscount` that:
// - Takes `price` (number) and `discountPercent` (number)
// - Returns the discounted price
// 💰 return price - (price * discountPercent / 100)

// ✅ Test your functions
// console.log(calculateTax(100, 0.08)) // 8
// console.log(formatPrice(1999)) // "$19.99"
// console.log(applyDiscount(100, 20)) // 80

// 🐨 Export your functions so we can verify your work
// 💰 export { calculateTax, formatPrice, applyDiscount }
